import React from "react";
import { Link } from "react-router-dom";
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
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:underline">
                  Shop
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:underline">
                  Best Sellers
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:underline">
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:underline">
                  Men's Collection
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:underline">
                  Women's Collection
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:underline">
                  Mobile Accessories
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:underline">
                  Electronics
                </Link>
              </li>
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
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Instagram />
              </a>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Send />
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <SiTiktok size={22} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
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