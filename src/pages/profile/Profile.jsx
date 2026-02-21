import React from "react";
import { useContextGlobal } from "../../context/Context";

export default function Profile() {
  const { user, logout } = useContextGlobal();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          My Profile
        </h2>

        <p className="text-gray-600 mb-2">
          <span className="font-medium">Username:</span>{" "}
          {user?.username}
        </p>

        <p className="text-gray-600 mb-6">
          <span className="font-medium">Email:</span>{" "}
          {user?.email}
        </p>

        <button
          onClick={logout}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
