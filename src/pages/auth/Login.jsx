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
    mutationFn: loginUser,
  
    onSuccess: (data) => {
      console.log("SUCCESS:", data);
  
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
  
      navigate("/profile");
    },
  
    onError: (error) => {
      console.log("ERROR:", error);
      alert("Login failed!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-[300px] space-y-3">
        <input
          value={form.username}
          placeholder="emilys"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
          className="w-full p-2 border"
        />

        <input
          value={form.password}
          type="password"
          placeholder="emilyspass"
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