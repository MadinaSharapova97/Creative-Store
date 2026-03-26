// LOGIN
export async function loginUser(credentials) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error("Login failed");

  return res.json();
}

// REGISTER (fake)
export async function registerUser(userData) {
  const res = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  // if (!res.ok) throw new Error("Register failed");

  // return res.json();


  const data = await res.json();
  console.log("REGISTER RESPONSE:", data);

  return data;
}