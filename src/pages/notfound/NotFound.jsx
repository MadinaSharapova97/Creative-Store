import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl text-center">

        {/* 404 */}
        <h1 className="text-8xl sm:text-9xl font-extrabold text-green-600 animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
          Please return to the homepage and continue shopping.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <ShoppingBag size={20} />
            Browse Products
          </Link>

        </div>

      </div>
    </div>
  );
}