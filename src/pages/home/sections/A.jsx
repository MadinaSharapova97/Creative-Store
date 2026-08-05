import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; import './swiper.css'
import desktop1 from "../../../assets/heroSlide/desktop1.png";
import desktop2 from "../../../assets/heroSlide/desktop2.png";
import desktop3 from "../../../assets/heroSlide/desktop3.png";
import desktop4 from "../../../assets/heroSlide/desktop4.png";
import './swiper.css'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

export default function HeroProductSlider() {
    const navigate = useNavigate();

    const slides = [
        { id: 1, title: "Urban Street Fashion", desc: "Upgrade your everyday look with our new streetwear collection — stylish, bold, and comfortable.", image: desktop1, slug: "beauty" },
        { id: 2, title: "Premium Smartwatch", desc: "Stay connected and in control — monitor your health, track your activity, and keep time in style.", image: desktop2, slug: "furniture" },
        { id: 3, title: "Smart Ergonomic Furniture", desc: "Experience comfort and productivity with an ergonomic design built for long working hours.", image: desktop3, slug: "mens-shirts" },
        { id: 4, title: "Next-Gen Gaming Console", desc: "Feel the power of performance and speed — your ultimate gaming experience starts here.", image: desktop4, slug: "mobile-accessories" },
        { id: 5, title: "Lightweight Running Shoes", desc: "Run faster and further with breathable comfort and superior grip designed for all terrains.", image: desktop1, slug: "smartphones" },
        { id: 6, title: "Luxury Eau de Parfum", desc: "Unleash your confidence with an unforgettable fragrance that defines sophistication and charm.", image: desktop1, slug: "womens-dresses" },
        { id: 7, title: "Luxury Eau de Parfum", desc: "Unleash your confidence with an unforgettable fragrance that defines sophistication and charm.", image: desktop1, slug: "womens-jewellery" },
        { id: 8, title: "Luxury Eau de Parfum", desc: "Unleash your confidence with an unforgettable fragrance that defines sophistication and charm.", image: desktop1, slug: "mens-shoes" },
        { id: 9, title: "Luxury Eau de Parfum", desc: "Unleash your confidence with an unforgettable fragrance that defines sophistication and charm.", image: desktop1, slug: "kitchen-accessories" },
        { id: 10, title: "Luxury Eau de Parfum", desc: "Unleash your confidence with an unforgettable fragrance that defines sophistication and charm.", image: desktop1, slug: "smartphones" },
    ];

    return (
        <div className="w-full h-full pt-3 overflow-hidden hero">
            <Swiper
                spaceBetween={0}
                centeredSlides
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1200}
                pagination={{ clickable: true }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="container mx-auto h-full md:h-full px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col md:flex-row items-center">
                            {/* Left */}
                            <div className=" w-full md:w-6/12 text-center md:text-left text-white"
                            >
                                <h2 className="text-3xl md:text-5xl font-bold text-white text-shadow">
                                    {slide.title}
                                </h2>
                                <p className="mt-3 md:mt-5 text-white max-w-md mx-auto md:mx-0 text-shadow">
                                    {slide.desc}
                                </p>
                                <button
                                    onClick={() => navigate(`/category/${slide.slug}`)}
                                    className="mt-4 md:mt-6 px-6 py-3 bg-[#0c4b23] text-white rounded-lg">
                                    Shop Now
                                </button>
                            </div>

                            {/* Right */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className=" w-full md:max-w-[460px] h-auto object-contain md:py-5"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}