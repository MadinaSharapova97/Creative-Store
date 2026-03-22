import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "./swiper.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// images
import desktop1 from "../../../assets/heroSlide/desktop1.jpg";
import desktop2 from "../../../assets/heroSlide/desktop2.png";
import desktop3 from "../../../assets/heroSlide/desktop3.jpg";
import desktop4 from "../../../assets/heroSlide/desktop4.jpg";
import desktop5 from "../../../assets/heroSlide/desktop5.jpg";
import desktop6 from "../../../assets/heroSlide/desktop6.jpg";
import desktop7 from "../../../assets/heroSlide/desktop7.jpg";
import desktop8 from "../../../assets/heroSlide/desktop8.jpg";
import desktop9 from "../../../assets/heroSlide/desktop9.jpg";
import desktop10 from "../../../assets/heroSlide/desktop10.jpg";


import mobile2 from "../../../assets/heroSlide/mobileIMG2.jpg"
import mobile3 from "../../../assets/heroSlide/mobileIMG3.jpg";

const slides = [
  { id: 1, desktop: desktop1, mobile: mobile2, slug: "beauty" },
  { id: 2, desktop: desktop2, mobile: mobile3, slug: "furniture" },
  { id: 3, desktop: desktop3, mobile: mobile2, slug: "mens-shirts" },
  { id: 4, desktop: desktop4, mobile: mobile3, slug: "mobile-accessories" },
  { id: 5, desktop: desktop5, mobile: mobile3, slug: "smartphones" },
  { id: 6, desktop: desktop6, mobile: mobile3, slug: "womens-dresses" },
  { id: 7, desktop: desktop7, mobile: mobile3, slug: "womens-jewellery" },
  { id: 8, desktop: desktop8, mobile: mobile3, slug: "kitchen-accessories" },
  { id: 9, desktop: desktop9, mobile: mobile3, slug: "laptops" },
  { id: 10, desktop: desktop10, mobile: mobile3, slug: "mens-watches" },
];

export default function HeroProductSlider() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[500px] md:h-[435px] overflow-hidden">
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
              className="relative w-full h-full cursor-pointer"
              onClick={() => navigate(`/category/${slide.slug}`)}
            >
              {/* Desktop image */}
              <img
                src={slide.desktop}
                alt="hero-slide-desktop"
                className="hidden md:block w-full h-full object-cover"
              />

              {/* Mobile image */}
              <img
                src={slide.mobile}
                alt="hero-slide-mobile"
                className="block md:hidden w-full h-full object-cover"
              />

              {/* Optional hover effect */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition duration-300"></div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}