import React, { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

import { useContextGlobal } from "../context/Context";
import { useNavigate } from "react-router-dom";

// logo
import logo from "../assets/logo/Logo.webp";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems, user } = useContextGlobal();
  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/register");
    }
  };
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md top-0 left-0 right-0 z-50 fixed py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="p-2 w-[125px] sm:w-[145px] md:w-[165px]  lg:w-[180px]">
            <img
              src={logo}
              alt="Creative Store"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-green-600 hover:text-green-800 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side: Profile + Cart */}
          <div className="flex items-center space-x-4">
            {/* Profile */}
            <a
              href="/login"
              className="flex items-center space-x-1 text-green-600 hover:text-green-800 transition"
            >
              <span>Sign In</span>
            </a>
            <a
              href="/register"
              className="flex items-center space-x-1 text-green-600 hover:text-green-800 transition"
            >
              <span>Sign Up</span>
            </a>
            <div
              onClick={handleProfileClick}
              className="flex items-center space-x-1 text-green-600 hover:text-green-800 transition cursor-pointer"
            >
              <User size={22} />
            </div>

            {/* Cart */}
            <a
              href="/cart"
              className="relative text-green-600 hover:text-green-800 transition"
            >
              <ShoppingCart size={22} />
              {/* Badge */}
              <span className="absolute -top-[9px] -right-2 bg-green-600 text-white text-xs px-2 rounded-full">
                {cartItems.length}
              </span>
            </a>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <X size={28} className="text-green-600" /> : <Menu size={28} className="text-green-600" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown (faqat links) */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-green-600 hover:text-green-800 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
