import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-gray-600 text-sm">{product.category}</p>
      <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
      <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
        Add to Cart
      </button>
    </div>
  );
}
