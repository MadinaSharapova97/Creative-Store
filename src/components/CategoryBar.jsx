import React from "react";
import { useNavigate } from "react-router-dom";

// images
import smartphones from "../assets/icons/smartphones.png";
import beauty from "../assets/icons/beauty.png";
import groceries from "../assets/icons/groceries.png";
import jewellery from "../assets/icons/jewellery.jpg";
import laptops from "../assets/icons/laptops.png";
import decoration from "../assets/icons/decoration.png";
import shoe from "../assets/icons/shoe.png";
import womensclothes from "../assets/icons/clothes2.png";

export default function CategoriesSection() {
  const navigate = useNavigate();

  // 🔹 6 ta asosiy kategoriya
  const categories = [
    { name: "Smartphones", slug: "smartphones", image: smartphones },
    { name: "Women's closing", slug: "womens-dresses", image: womensclothes },
    { name: "Laptops", slug: "laptops", image: laptops },
    { name: "Jewellery", slug: "womens-jewellery", image: jewellery },
    { name: "Beauty", slug: "beauty", image: beauty },
    { name: "Men's shoes", slug: "mens-shoes", image: shoe },
    { name: "Groceries", slug: "groceries", image: groceries },
    { name: "Home Decoration", slug: "home-decoration", image: decoration },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-3">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer group hover:transition-all duration-300 flex flex-col items-center justify-center"
            onClick={() => navigate(`/category/${category.slug}`)}
          >
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full ">
              <img
                src={category.image}
                alt={category.name}
                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="capitalize font-medium text-sm text-gray-700 text-center group-hover:text-green-600 transition-colors duration-300">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
