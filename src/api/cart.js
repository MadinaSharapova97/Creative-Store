export const getCart = async (userId) => {
    const res = await fetch(`https://dummyjson.com/carts/user/${userId}`);
    return res.json();
  };
  
  export const addToCart = async (cartData) => {
    const res = await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartData),
    });
    return res.json();
  };
  