import React from "react";
import FadeInSection from "../../../components/FadeInSection";
import img1 from "../../../assets/images/card1.png";
import img2 from "../../../assets/images/card2.png";
import img3 from "../../../assets/images/card3.png";
import img4 from "../../../assets/images/card4.png";
import img5 from "../../../assets/images/card5.png";
import img6 from "../../../assets/images/card6.png";
import img7 from "../../../assets/images/card7.png";
import img8 from "../../../assets/images/card8.png";
import img9 from "../../../assets/images/card9.png";
import ProductCard from "../../../components/ProductCard";

export default function BestSellersSlider() {
  const bestSellers = [
    { id: 1, title: "Lorem, ipsum dolor.", price: 89, image: img1, rating: 4 },
    { id: 2, title: "Lorem, ipsum dolor.", price: 59, image: img2, rating: 5 },
    { id: 3, title: "Lorem, ipsum dolor.", price: 99, image: img3, rating: 4.5 },
    { id: 4, title: "Lorem, ipsum dolor.", price: 45, image: img4, rating: 4 },
    { id: 5, title: "Lorem, ipsum dolor.", price: 35, image: img5, rating: 5 },
    { id: 6, title: "Lorem, ipsum dolor.", price: 35, image: img6, rating: 5 },
    { id: 7, title: "Lorem, ipsum dolor.", price: 35, image: img7, rating: 5 },
    { id: 8, title: "Lorem, ipsum dolor.", price: 35, image: img8, rating: 5 },
    { id: 9, title: "Lorem, ipsum dolor.", price: 35, image: img9, rating: 5 },
  ];

  return (
    <div className="bg-[#fff8e7] py-10">
      <FadeInSection className="max-w-7xl mx-auto px-4 pb-10 ">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-green-600">Best Sellers</h2>
          <button className="text-sm md:text-base font-medium text-green-600 hover:underline">
            View All
          </button>
        </div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-auto py-2 snap-x snap-mandatory">
          <div className="flex gap-6 min-w-max">
            {bestSellers.map((item) => (
              <div
                key={item.id}
                className="w-64 flex-shrink-0 snap-start"
              >
                <ProductCard
                  product={{
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    thumbnail: item.image,
                  }}
                />
              </div>
            ))}
          </div>
        </div>


      </FadeInSection>

    </div>

  );
}
