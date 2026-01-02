import React from "react";

import FadeInSection from "../../../components/FadeInSection";

// LOGOLAR (o‘zing yuklagan rasmlar)
import brand1 from "../../../assets/brands/adidas.png";
import brand2 from "../../../assets/brands/nike.png";
import brand3 from "../../../assets/brands/apple.png";
import brand4 from "../../../assets/brands/samsung.png";
import brand5 from "../../../assets/brands/sony.png";

export default function PartnerBrands() {
    
  
    const brands = [brand1, brand2, brand3, brand4, brand5];
 
    return (
        <FadeInSection>
          <section className="max-w-7xl mx-auto px-4 py-14">
            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Partner Brands
              </h2>
              <p className="text-gray-500 mt-2">
                Trusted by world-class brands
              </p>
            </div>
    
            {/* Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
              {brands.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center "
                >
                  <img
                    src={logo}
                    alt="Brand logo"
                    className="h-20 md:h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>
      );
    
}