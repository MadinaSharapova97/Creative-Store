import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './swiper.css'


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// images
import heroImg1 from "../../../assets/images/fashion.png";
import heroImg2 from "../../../assets/images/IMAGE (1).png";
import heroImg3 from "../../../assets/images/chair.png";
import heroImg4 from "../../../assets/images/Xbox.png";
import heroImg5 from "../../../assets/images/shoe.png";
import heroImg6 from "../../../assets/images/parfume.png";


const slides = [
  {
    id: 1,
    title: "Urban Street Fashion",
    desc: "Upgrade your everyday look with our new streetwear collection — stylish, bold, and comfortable.",
    image: heroImg1,
    bgColor: "#fef3c7", // soft yellow tone
  },
  {
    id: 2,
    title: "Premium Smartwatch",
    desc: "Stay connected and in control — monitor your health, track your activity, and keep time in style.",
    image: heroImg2,
    bgColor: "#f1f4f0", // elegant gray tone
  },
  
  {
    id: 3,
    title: "Smart Ergonomic Furniture",
    desc: "Experience comfort and productivity with an ergonomic design built for long working hours.",
    image: heroImg3,
    bgColor: "#aaeb9c", // light purple
  },
  {
    id: 4,
    title: "Next-Gen Gaming Console",
    desc: "Feel the power of performance and speed — your ultimate gaming experience starts here.",
    image: heroImg4,
    bgColor: "#d3d9ff", // light green
  },
  {
    id: 5,
    title: "Lightweight Running Shoes",
    desc: "Run faster and further with breathable comfort and superior grip designed for all terrains.",
    image: heroImg5,
    bgColor: "#fee2e2", // soft red tone
  },
  {
    id: 6,
    title: "Luxury Eau de Parfum",
    desc: "Unleash your confidence with an unforgettable fragrance that defines sophistication and charm.",
    image: heroImg6,
    bgColor: "#e7e5e3", // warm neutral
  },
];
export default function HeroProductSlider() {
  return (
    <div className="w-full h-[100vh] overflow-hidden">
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
        className="h-full relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-20"
              style={{ backgroundColor: slide.bgColor }}
            >
              {/* Left */}
              <div className="flex-1 text-center md:text-left mt-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                  {slide.title}
                </h2>
                <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
                  {slide.desc}
                </p>
                <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg">
                  Shop Now
                </button>
              </div>

              {/* Right */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[280px] md:w-[420px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
