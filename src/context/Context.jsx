import { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../api/auth";

const Context = createContext();

export function ContextProvider({ children }) {

  //auth

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (credentials) => {
    const data = await loginUser(credentials);

    const userData = {
      id: data.id,
      username: data.username,
      email: data.email,
      token: data.token,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };



  //cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Context.Provider value={{
      user,
      login,
      logout,
      cartItems,
      addToCart,
      removeFromCart,

    }}>
      {children}
    </Context.Provider>
  );
}

export const useContextGlobal = () => useContext(Context);
