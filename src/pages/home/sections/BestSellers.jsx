import React from "react";
import img1 from "../../../assets/images/hat.jpg";
import img2 from "../../../assets/images/shoe.jpg";
import img3 from "../../../assets/images/parfume.jpg";
import img4 from "../../../assets/images/bag.jpg";
import img5 from "../../../assets/images/suit.jpg";
import img6 from "../../../assets/images/womenshoe.jpg";
import img7 from "../../../assets/images/suit2.jpg";
import img8 from "../../../assets/images/phone.jpg";
import img9 from "../../../assets/images/jewelry.jpg";

export default function BestSellersSlider() {
  const bestSellers = [
    { id: 1, title: "Classic Denim Jacket", price: 89, image: img1, rating: 4 },
    { id: 2, title: "Slim Fit Chinos", price: 59, image: img2, rating: 5 },
    { id: 3, title: "Casual White Sneakers", price: 99, image: img3, rating: 4.5 },
    { id: 4, title: "Leather Belt", price: 45, image: img4, rating: 4 },
    { id: 5, title: "Wool Scarf", price: 35, image: img5, rating: 5 },
    { id: 6, title: "Wool Scarf", price: 35, image: img6, rating: 5 },
    { id: 7, title: "Wool Scarf", price: 35, image: img7, rating: 5 },
    { id: 8, title: "Wool Scarf", price: 35, image: img8, rating: 5 },
    { id: 9, title: "Wool Scarf", price: 35, image: img9, rating: 5 },
  ];

  return (
    <div className="bg-yellow-100">
      <section className="max-w-7xl mx-auto px-4 pb-10 ">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Best Sellers</h2>
        <button className="text-sm md:text-base font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] bg-white  shadow-md hover:shadow-xl transition-all duration-300 relative group flex-shrink-0"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden p-4 rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover rounded-lg duration-500 hover:scale-105"
              />

          

              {/* CTA Button */}
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg">
                Shop Now
              </button>
            </div>

            {/* Text */}
            <div className="p-4 text-center">
              <h3 className="text-md font-semibold text-gray-800 truncate">
                {item.title}
              </h3>
              <p className="text-green-600 font-bold text-base">${item.price}</p>
              
              {/* Rating Stars */}
              <div className="flex justify-center mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.047 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}
