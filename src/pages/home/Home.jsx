import React, { useState } from "react";
import CategoryBar from "../../components/CategoryBar";
import BestSellers from "./sections/BestSellers";
import DealsOfTheDay from "./sections/DealsOfTheDay";
import FeaturedCategories from "./sections/FeaturedCategories";
import WhyChooseUs from "./sections/WhyChooseUs";
import PartnerBrands from "./sections/PartnerBrands";
import Testimonials from "./sections/Testimonials";
import HeroSlider from "./sections/HeroSlider"

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);
     return (
        <div className="w-full pt-[56px]">
            <HeroSlider />
            {/* <CategoryBar onSelectCategory={setSelectedCategory} />
            <DealsOfTheDay />
            <BestSellers />
            <FeaturedCategories />
            <WhyChooseUs />
            <PartnerBrands />
            <Testimonials /> */}

        </div>
    );
}
