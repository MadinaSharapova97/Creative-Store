import React from "react";
import { useContextGlobal } from "../../context/Context";
import emptyCart from "../../assets/icons/empty-cart.png";

export default function Cart() {
  const { cartItems, removeFromCart } = useContextGlobal();
  console.log("Cart items:", cartItems);


  // 🟢 BO‘SH SAVAT
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 mt-10">
        <img
          src={emptyCart}
          alt="Empty cart"
          className="w-60 mb-6 opacity-80"
        />
        <h2 className="text-2xl font-semibold text-gray-800">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven’t added anything yet
        </p>
      </div>
    );
  }

  // 💰 TOTAL PRICE
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT - PRODUCTS */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white shadow rounded-xl p-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-32 h-32 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-green-600 font-bold mt-1">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-white shadow rounded-xl p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Total items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
