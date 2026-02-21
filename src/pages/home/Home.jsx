import React, { useState } from "react";
import CategoryBar from "../../components/CategoryBar";
import HeroSlider from "./sections/HeroSlider";
import { getProductsByCategory } from "../../api/products";
import Loader from "../../components/Loader";
import BestSellers from "./sections/BestSellers";
import DealsOfTheDay from "./sections/DealsOfTheDay";
import FeaturedCategories from "./sections/FeaturedCategories";
import WhyChooseUs from "./sections/WhyChooseUs";
import PartnerBrands from "./sections/PartnerBrands";
import Testimonials from "./sections/Testimonials";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { data, isLoading } = getProductsByCategory(selectedCategory);

    return (
        <div className="w-full">
            {/* Kategoriya bo‘limi */}
            <HeroSlider />
            <CategoryBar onSelectCategory={setSelectedCategory} />
            <DealsOfTheDay />
            <BestSellers />
            <FeaturedCategories />
            <WhyChooseUs />
            <PartnerBrands />
            <Testimonials />
        
        </div>
    );
}
