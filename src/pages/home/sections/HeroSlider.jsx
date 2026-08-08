import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import desktop1 from "../../../assets/heroSlide/desktop1.webp";
import desktop2 from "../../../assets/heroSlide/desktop2.webp";
import desktop3 from "../../../assets/heroSlide/desktop3.webp";
import desktop4 from "../../../assets/heroSlide/desktop4.webp";
import desktop5 from "../../../assets/heroSlide/desktop5.webp";
import desktop6 from "../../../assets/heroSlide/desktop6.webp";
import desktop7 from "../../../assets/heroSlide/desktop7.webp";
import desktop8 from "../../../assets/heroSlide/desktop8.webp";
import desktop9 from "../../../assets/heroSlide/desktop9.webp";
import desktop10 from "../../../assets/heroSlide/desktop10.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

const slides = [
    {
        id: 1,
        title: "Beauty Essentials",
        desc: "Discover premium skincare, makeup, and fragrances designed to enhance your natural beauty every day.",
        image: "/heroSlide/desktop1.webp",
        slug: "beauty",
    },
    {
        id: 2,
        title: "Modern Furniture",
        desc: "Transform your home with stylish, functional furniture crafted for comfort, elegance, and everyday living.",
        image: desktop2,
        slug: "furniture",
    },
    {
        id: 3,
        title: "Men's Shirts Collection",
        desc: "Refresh your wardrobe with premium shirts that combine modern style, comfort, and effortless confidence.",
        image: desktop3,
        slug: "mens-shirts",
    },
    {
        id: 4,
        title: "Mobile Accessories",
        desc: "Upgrade your devices with durable chargers, cases, earbuds, and smart accessories for every lifestyle.",
        image: desktop4,
        slug: "mobile-accessories",
    },
    {
        id: 5,
        title: "Latest Smartphones",
        desc: "Explore cutting-edge smartphones featuring powerful performance, stunning displays, and advanced cameras.",
        image: desktop5,
        slug: "smartphones",
    },
    {
        id: 6,
        title: "Women's Dresses",
        desc: "Find elegant dresses for every occasion, from casual daytime styles to timeless evening collections.",
        image: desktop6,
        slug: "womens-dresses",
    },
    {
        id: 7,
        title: "Women's Jewellery",
        desc: "Complete your look with beautifully crafted necklaces, rings, earrings, and bracelets made to shine.",
        image: desktop7,
        slug: "womens-jewellery",
    },
    {
        id: 8,
        title: "Men's Shoes",
        desc: "Step into confidence with premium shoes that deliver exceptional comfort, quality, and timeless style.",
        image: desktop8,
        slug: "mens-shoes",
    },
    {
        id: 9,
        title: "Kitchen Accessories",
        desc: "Cook smarter with practical kitchen essentials designed to make every meal easier and more enjoyable.",
        image: desktop9,
        slug: "kitchen-accessories",
    },
    {
        id: 10,
        title: "Home Decoration",
        desc: "Bring warmth and personality to your space with elegant décor pieces that inspire modern living.",
        image: desktop10,
        slug: "home-decoration",
    },
];

export default function HeroSlider() {
    const navigate = useNavigate();

    return (
        <section className="w-full h-full pt-3 overflow-hidden hero">
            <Swiper
                spaceBetween={0}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1200}
                pagination={{ clickable: true }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col md:flex-row items-center">

                            {/* Left */}
                            <div className="w-full md:w-6/12 text-center md:text-left text-white">
                                <h2 className="text-3xl md:text-5xl font-bold text-white text-shadow">
                                    {slide.title}
                                </h2>

                                <p className="mt-3 md:mt-5 text-white max-w-md mx-auto md:mx-0 text-shadow">
                                    {slide.desc}
                                </p>

                                <button
                                    onClick={() => navigate(`/category/${slide.slug}`)}
                                    className="mt-4 md:mt-6 px-6 py-3 bg-[#0c4b23] text-white rounded-lg"
                                >
                                    Shop Now
                                </button>
                            </div>

                            {/* Right */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                width="460"
                                height="460"
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                                decoding="async"
                                className="w-full md:max-w-[460px] h-auto object-contain md:py-5"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}



// export default function HeroSlider() {
//   const navigate = useNavigate();

//   return (
//     <section className="w-full h-full pt-3 overflow-hidden hero">
//       <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col md:flex-row items-center">

//         {/* LEFT */}
//         <div className="w-full md:w-6/12 text-center md:text-left text-white">
//           <h2 className="text-3xl md:text-5xl font-bold text-white text-shadow">
//             Beauty Essentials
//           </h2>

//           <p className="mt-3 md:mt-5 text-white max-w-md mx-auto md:mx-0 text-shadow">
//             Discover premium skincare, makeup, and fragrances designed to
//             enhance your natural beauty every day.
//           </p>

//           <button
//             onClick={() => navigate("/category/beauty")}
//             className="mt-4 md:mt-6 px-6 py-3 bg-[#0c4b23] text-white rounded-lg"
//           >
//             Shop Now
//           </button>
//         </div>

//         {/* RIGHT */}
//         <img
//           src="/heroSlide/desktop1.webp"
//           alt="Beauty Essentials"
//           width="460"
//           height="460"
//           loading="eager"
//           fetchPriority="high"
//           decoding="async"
//           className="w-full md:max-w-[460px] h-auto object-contain md:py-5"
//         />

//       </div>
//     </section>
//   );
// }