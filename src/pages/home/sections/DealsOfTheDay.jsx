import React from "react";
import ProductCard from "../../../components/ProductCard";
import FadeInSection from "../../../components/FadeInSection";
import img1 from "../../../assets/images/phone.jpg";
import img2 from "../../../assets/images/bag.jpg";
import img3 from "../../../assets/images/womenshoe.jpg";


const deals = [
    {
        id: 1,
        title: "Lorem, ipsum dolor.",
        price: "49.99",
        oldPrice: "69.99",
        thumbnail: img1,
    },
    {
        id: 2,
        title: "Lorem, ipsum dolor.",
        price: "39.99",
        oldPrice: "59.99",
        thumbnail: img2,
    },
    {
        id: 3,
        title: "Lorem, ipsum dolor.",
        price: "89.99",
        oldPrice: "129.99",
        thumbnail: img3,
    },

];

const DealsOfTheDay = () => {
    return (
        <section className="py-10 px-5 md:px-12 bg-red-100">
            {/* TITLE */}
            <FadeInSection className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center gap-2 text-green-600">
                    Deals of the Day
                </h2>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Ends in: <span className="font-bold">04:23:45</span>
                </div>
            </FadeInSection>

            {/* GRID */}
            <FadeInSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {deals.map((item) => (
                   <ProductCard key={item.id} product={item}/>   
                ))}
            </FadeInSection>
        </section>
    );
};

export default DealsOfTheDay;
