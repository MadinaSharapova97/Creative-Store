import React, { useState } from "react";
import CategoryBar from "../../components/CategoryBar";
import HeroSlider from "./sections/HeroSlider";
import { getProductsByCategory } from "../../api/products";
import Loader from "../../components/Loader";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { data, isLoading } = getProductsByCategory(selectedCategory);

    return (
        <div className="w-full">
            {/* Kategoriya bo‘limi */}
            <CategoryBar onSelectCategory={setSelectedCategory} />

            {/* Slider */}
            <HeroSlider />

            {/* Mahsulotlar ro‘yxati */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                {selectedCategory && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 capitalize">
                            {selectedCategory} Products
                        </h2>

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {data?.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white p-4 shadow-md rounded-xl hover:shadow-lg transition"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-40 object-contain mb-3"
                                        />
                                        <h3 className="text-sm font-medium text-gray-700 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 font-semibold text-gray-900">
                                            ${item.price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
