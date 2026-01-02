import React from "react";
import FadeInSection from "../../../components/FadeInSection";
import { Truck, ShieldCheck, Headphones, RefreshCcw } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "Fast & Free Delivery",
      desc: "Quick shipping on all orders with no extra cost.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Payments",
      desc: "Your payments are protected with top-level security.",
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Customer Support",
      desc: "We’re always here to help whenever you need us.",
    },
    {
      icon: <RefreshCcw size={32} />,
      title: "Easy Returns",
      desc: "Hassle-free returns within 7 days.",
    },
  ];

  return (
    <FadeInSection className="">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We provide the best shopping experience with premium quality and trusted services
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className=" p-6 text-center"
            >
              <div className="flex justify-center mb-4 text-green-600 transition">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </FadeInSection>
  );
}
