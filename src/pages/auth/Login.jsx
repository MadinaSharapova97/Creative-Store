import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/auth";
import { useContextGlobal } from "../../context/Context";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContextGlobal();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: async (form) => {
      const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (
        savedUser &&
        savedUser.username === form.username &&
        savedUser.password === form.password
      ) {
        return {
          id: 1,
          username: savedUser.username,
          email: savedUser.email,
          token: "fake-token",

        };
      } else {
        throw new Error("Login failed");
        console.log("Saved : ", savedUser);
      }
    },

    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      navigate("/profile");
    },

    onError: () => {
      alert("Login failed: Invalid username or password");

    },

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
    console.log("Form : ", form);

  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-[300px] space-y-3">
        <input
          name="username"
          placeholder="Username"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
          className="w-full p-2 border"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full p-2 border"
        />

        <button className="w-full bg-green-600 text-white p-2">
          {mutation.isPending ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}