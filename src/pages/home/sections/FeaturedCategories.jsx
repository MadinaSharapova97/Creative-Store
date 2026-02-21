import React from "react";
import { Link } from "react-router-dom";

// Rasmlar
import img1 from "../../../assets/images/suit.jpg";
import img2 from "../../../assets/images/hat.jpg";
import img3 from "../../../assets/images/phone.jpg";
import img4 from "../../../assets/images/motorcycle.jpg";
import FadeInSection from "../../../components/FadeInSection";

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Men's Collection",
      slug: "mens-shirts",
      image: img1,
    },
    {
      name: "Women's Collection",
      slug: "womens-dresses",
      image: img2,
    },
    {
      name: "Mobile Accessories",
      slug: "mobile-accessories",
      image: img3,
    },
    {
      name: "Motorcycles",
      slug: "motorcycle",
      image: img4,
    },
  ];

  return (
    <section className="px-4 py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto ">
        {/* Title */}
        <div className="text-center mb-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
              Featured Categories
            </h2>
            <p className="text-gray-500 mt-2">
              Shop from our most popular categories
            </p>
          </FadeInSection>


        </div>

        {/* Grid */}
        <FadeInSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/category/${cat.slug}`}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[400px] object-cover group-hover: transition duration-600"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </FadeInSection>
      </div>
    </section>

  );
}
