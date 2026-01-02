import React from "react";
import img1 from "../../../assets/images/phone.jpg";
import img2 from "../../../assets/images/bag.jpg";
import img3 from "../../../assets/images/womenshoe.jpg";


const deals = [
    {
        id: 1,
        title: "Men's Classic Jacket",
        price: "$49.99",
        oldPrice: "$69.99",
        img: img1,
    },
    {
        id: 2,
        title: "Running Sneakers",
        price: "$39.99",
        oldPrice: "$59.99",
        img: img2,
    },
    {
        id: 3,
        title: "Smart Watch X Pro",
        price: "$89.99",
        oldPrice: "$129.99",
        img: img3,
    },

];

const DealsOfTheDay = () => {
    return (
        <section className="pb-10 px-5 md:px-12 bg-red-100">
            {/* TITLE */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    Deals of the Day
                </h2>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Ends in: <span className="font-bold">04:23:45</span>
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {deals.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-4"
                    >
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-64 object-cover transition-all duration-500 hover:scale-105"
                            />
                        </div>

                        <h3 className="text-lg font-semibold mt-4">{item.title}</h3>

                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-xl font-bold text-red-600">{item.price}</span>
                            <span className="line-through text-gray-400">{item.oldPrice}</span>
                        </div>

                        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900">
                            Shop Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DealsOfTheDay;
