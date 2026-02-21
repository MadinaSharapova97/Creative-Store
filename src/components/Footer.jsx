import React from "react";
import {
  Instagram,
  Send,
  Phone,
  Mail,
  Twitter,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MyShop</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Your one-stop destination for quality products, fast delivery,
              and trusted brands.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Best Sellers</a></li>
              <li><a href="#" className="hover:underline">Deals</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Men's Collection</a></li>
              <li><a href="#" className="hover:underline">Women's Collection</a></li>
              <li><a href="#" className="hover:underline">Mobile Accessories</a></li>
              <li><a href="#" className="hover:underline">Electronics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>support@myshop.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+998 90 123 45 67</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:opacity-80 transition">
                <Instagram />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Send /> {/* Telegram */}
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <SiTiktok size={22} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
