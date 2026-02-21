

import { useContextGlobal } from "../context/Context";

export default function ProductCard({ product }) {
  const { addToCart } = useContextGlobal();
  console.log("Adding:", product);


  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <h3 className="mt-3 font-semibold text-gray-800">
        {product.title}
      </h3>

      <p className="text-green-600 font-bold mt-1">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

