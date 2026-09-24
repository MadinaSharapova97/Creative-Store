

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import desktop1 from "../../../assets/heroSlide/desktop1.webp";
import desktop2 from "../../../assets/heroSlide/desktop2.webp";
import desktop3 from "../../../assets/heroSlide/desktop3.webp";
import desktop4 from "../../../assets/heroSlide/desktop4.webp";
import desktop5 from "../../../assets/heroSlide/desktop5.webp";
import desktop6 from "../../../assets/heroSlide/desktop6.webp";

import "./heroSlide.css";

const slides = [
    {
        id: 1,
        title: "Beauty Essentials",
        desc: "Discover premium skincare, makeup, and fragrances designed to enhance your natural beauty every day.",
        image: desktop1,
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
        title: "Women's Jewellery",
        desc: "Complete your look with beautifully crafted necklaces, rings, earrings, and bracelets made to shine.",
        image: desktop5,
        slug: "womens-jewellery",
    },
    {
        id: 6,
        title: "Kitchen Accessories",
        desc: "Cook smarter with practical kitchen essentials designed to make every meal easier and more enjoyable.",
        image: desktop6,
        slug: "kitchen-accessories",
    },
];

export default function HeroSlider() {
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = slides.length;
    const slide = slides[currentSlide];

    /* ================= NEXT ================= */
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    /* ================= PREVIOUS ================= */
    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + totalSlides) % totalSlides
        );
    };

    /* ================= AUTOPLAY ================= */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <section
            className="
        hero
        relative
        w-full
        overflow-hidden
      "
        >
            {/* ================= SLIDE ================= */}
            <div
                key={slide.id}
                className="
     hero-slide
     h-[calc(100dvh-56px)]
    mx-auto
    flex
    w-full
    max-w-7xl
    flex-col
    items-center
    justify-center
    gap-1
    overflow-hidden
    px-8
    py-8
    sm:px-12
    sm:py-9
    md:flex-row
    md:gap-5
    md:px-12
    md:py-7
    lg:gap-8
    lg:px-16
    xl:px-20
  "
            >
                {/* ================= TEXT ================= */}
                <div
                    className="
            flex
            w-full
            flex-col
            items-center
            text-center

            md:w-1/2
            md:items-start
            md:text-left
          "
                >
                    <h1
                        className="
              hero-title
              max-w-[620px]
              text-2xl
              font-bold
              leading-tight
              text-white
              drop-shadow-md

              min-[375px]:text-3xl
              sm:text-4xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
            "
                    >
                        {slide.title}
                    </h1>

                    <p
                        className="
              hero-description
              mt-3
              max-w-[500px]
              text-sm
              leading-relaxed
              text-white
              drop-shadow-md

              min-[375px]:text-base
              sm:mt-4
              sm:text-lg
              md:mt-5
              md:text-base
              lg:text-lg
              xl:text-xl
            "
                    >
                        {slide.desc}
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            navigate(`/category/${slide.slug}`)
                        }
                        className="
              hero-button-shop
              mt-5
              rounded-lg
              bg-[#117134]
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-md
              transition
              hover:bg-[#0d5d2a]
              hover:shadow-lg

              sm:mt-6
              sm:px-6
              sm:py-3
              sm:text-base
            "
                    >
                        Shop Now
                    </button>
                </div>

                {/* ================= IMAGE ================= */}
                <div
                    className="
    flex
    w-full
    min-h-0
    flex-1
    items-center
    justify-center

    md:w-1/2
    md:flex-none
  "
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        width={460}
                        height={460}
                        loading={currentSlide === 0 ? "eager" : "eager"}
                        fetchPriority={currentSlide === 0 ? "high" : "auto"}
                        decoding="async"
                        className="
      hero-image
      block
      h-auto
      max-h-[285px]
      w-auto
      max-w-[290px]
      object-contain

      min-[375px]:max-h-[290px]
      min-[375px]:max-w-[300px]

      sm:max-h-[350px]
      sm:max-w-[360px]

      md:max-h-[330px]
      md:max-w-[330px]

      lg:max-h-[380px]
      lg:max-w-[390px]

      xl:max-h-[420px]
      xl:max-w-[430px]
    "
                    />
                </div>
            </div>

            {/* ================= PREVIOUS ================= */}
            <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="
          hero-button
          hero-button-prev
          absolute
          left-2
          top-1/2
          z-10
          -translate-y-1/2

          sm:left-4
        "
            >
                ❮
            </button>

            {/* ================= NEXT ================= */}
            <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="
          hero-button
          hero-button-next
          absolute
          right-2
          top-1/2
          z-10
          -translate-y-1/2

          sm:right-4
        "
            >
                ❯
            </button>

            {/* ================= PAGINATION ================= */}
            <div
                className="
        absolute
       !bottom-10
        left-1/2
        z-30
        flex
        -translate-x-1/2
        items-center
        gap-2
        md:!bottom-4
  "
            >
                {slides.map((item, index) => (
                    <button
                        key={item.id}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={
                            index === currentSlide
                                ? "true"
                                : undefined
                        }
                        onClick={() => setCurrentSlide(index)}
                        className={`
              hero-pagination-bullet
              transition-all
              duration-300

              ${index === currentSlide
                                ? "hero-pagination-bullet-active"
                                : ""
                            }
            `}
                    />
                ))}
            </div>
        </section>
    );
}