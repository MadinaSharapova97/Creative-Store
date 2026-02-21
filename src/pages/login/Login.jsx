import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate("/");
    } catch (err) {
      alert("Username yoki parol noto'g'ri");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login to your account
        </h2>

        {/* USERNAME */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            placeholder="emilys"
            className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600 ${
              errors.username ? "border-red-500" : ""
            }`}
            {...register("username", {
              required: "Username majburiy",
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="emilyspass"
            className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600 ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password majburiy",
              minLength: {
                value: 4,
                message: "Kamida 4 ta belgi bo‘lishi kerak",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium disabled:opacity-50"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Test user: <br />
          <span className="font-medium">emilys / emilyspass</span>
        </p>
      </form>
    </div>
  );
}
