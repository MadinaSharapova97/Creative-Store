import React, { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md  top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">MyShop</div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side: Profile + Cart */}
          <div className="flex items-center space-x-4">
            {/* Profile */}
            <a
              href="/profile"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition"
            >
              <User size={22} />
              <span className="hidden sm:inline">Profile</span>
            </a>

            {/* Cart */}
            <a
              href="/cart"
              className="relative text-gray-700 hover:text-indigo-600 transition"
            >
              <ShoppingCart size={22} />
              {/* Badge */}
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </a>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <X size={28} /> : <Menu size={28} />}
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
              className="block text-gray-700 hover:text-indigo-600 transition"
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
