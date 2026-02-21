import React from "react";
import { Truck, ShieldCheck, Headphones, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-green-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Our Store
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-base md:text-lg">
            We are committed to providing high-quality products, affordable
            prices, and a seamless shopping experience for everyone.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our store was founded with one simple mission — to make online
              shopping easy, fast, and enjoyable. We carefully select our
              products to ensure quality, reliability, and modern design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From electronics and fashion to home essentials, we bring
              everything you need to one trusted platform.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521334884684-d80222895322"
              alt="About us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <ValueCard
              icon={<Truck size={32} />}
              title="Fast Delivery"
              desc="Quick and reliable shipping to your doorstep."
            />

            <ValueCard
              icon={<ShieldCheck size={32} />}
              title="Secure Payments"
              desc="Safe and trusted payment methods."
            />

            <ValueCard
              icon={<Headphones size={32} />}
              title="24/7 Support"
              desc="We are always here to help you."
            />

            <ValueCard
              icon={<Leaf size={32} />}
              title="Eco Friendly"
              desc="Sustainable products for a better future."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-green-600 text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Thousands of Happy Customers
          </h2>
          <p className="text-green-100 mb-6">
            Discover quality products and unbeatable deals today.
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition">
            Shop Now
          </button>
        </div>
      </section>

    </div>
  );
}

/* VALUE CARD COMPONENT */
function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition">
      <div className="text-green-600 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-sm text-gray-600">
        {desc}
      </p>
    </div>
  );
}
