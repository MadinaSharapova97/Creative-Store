// src/api/auth.js
export const login = async (username, password) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    return res.json(); // token qaytaradi
  };
  