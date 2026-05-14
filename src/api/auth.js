// LOGIN (REAL)
export async function loginUser(credentials) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });


  const data = await res.json(); 

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

// REGISTER (FAKE)
export async function registerUser(userData) {
  const res = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("Register failed");
  }

  return res.json();
}