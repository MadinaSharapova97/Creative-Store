import React from "react";
import FadeInSection from "../../../components/FadeInSection";

import user1 from "../../../assets/customer/john.jpg";
import user2 from "../../../assets/customer/sarah.jpg";
import user3 from "../../../assets/customer/michael.jpg";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Verified Buyer",
      image: user1,
      rating: 5,
      text: "Amazing quality and fast delivery. I will definitely shop again!",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Happy Customer",
      image: user2,
      rating: 5,
      text: "The products exceeded my expectations. Highly recommended!",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Loyal Customer",
      image: user3,
      rating: 4,
      text: "Great customer service and smooth shopping experience.",
    },
  ];

  return (
    <FadeInSection className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mt-3">
            Real reviews from people who love our products
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-md "
            >
              {/* User */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-lg ${
                      index < review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{review.text}”
              </p>
            </div>
          ))}
        </div>

      </div>
    </FadeInSection>
  );
}
