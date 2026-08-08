import React from "react";
import FadeInSection from "../../../components/FadeInSection";
import img1 from "../../../assets/images/card10.webp";
import img2 from "../../../assets/images/card11.webp";
import img3 from "../../../assets/images/card12.webp";
import { useNavigate } from "react-router-dom";


const collections = [
    {
        id: 1,
        title: "Summer Collection",
        image: img1,
        slug: "mens-shirts",
    },
    {
        id: 2,
        title: "Camping Essentials",
        image: img2,
        slug: "mens-shoes",
    },
    {
        id: 3,
        title: "Beach Collection",
        image: img3,
        slug: "sunglasses",
    },
];

export default function DealsOfTheDay() {
    const navigate = useNavigate();

    return (
        <section className="py-12 px-5 md:px-12 bg-[#fff8e7]">
            <div className="max-w-7xl mx-auto px-4">

                <FadeInSection className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                    <h2 className="text-3xl font-bold text-[#16a34a]">
                        Deals of the Day
                    </h2>

                    <div className="w-[145px] bg-red-500 text-white px-5 py-2 rounded-xl font-semibold shadow">
                        Ends in: 04:23:45
                    </div>
                </FadeInSection>

                <FadeInSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                    {collections.map((item) => (

                        <div
                            key={item.id}
                            onClick={() => navigate(`/category/${item.slug}`)}
                            className="group cursor-pointer"
                        >

                            <div className="transition-all duration-500 overflow-hidden">

                                <div className="h-[320px] flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full object-cover p-4 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className=" text-center">

                                    <h3 className="text-xl font-semibold text-[#16a34a]">
                                        {item.title}
                                    </h3>

                                </div>
                            </div>



                        </div>

                    ))}

                </FadeInSection>

            </div>
        </section>
    );
}