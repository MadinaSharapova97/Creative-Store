
import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useContextGlobal } from "../context/Context";
import logo from "../assets/logo/Logo.webp";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems, user } = useContextGlobal();

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleProfileClick = () => {
    setOpen(false);

    if (user) {
      navigate("/profile");
    } else {
      navigate("/register");
    }
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-2">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMenu}
            className="
    flex
    shrink-0
    items-center
    w-[80px]
    sm:w-[95px]
    md:w-[110px]
    lg:w-[125px]
    xl:w-[135px]
  "
          >
            <img
              src={logo}
              alt="Creative Store"
              className="block h-auto w-full object-contain"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="
                  whitespace-nowrap
                  text-sm
                  lg:text-base
                  font-medium
                  text-green-600
                  transition-colors
                  hover:text-green-800
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <Link
                to="/login"
                className="
                  whitespace-nowrap
                  text-sm lg:text-base
                  font-medium
                  text-green-600
                  transition-colors
                  hover:text-green-800
                "
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="
                  whitespace-nowrap
                  text-sm lg:text-base
                  font-medium
                  text-green-600
                  transition-colors
                  hover:text-green-800
                "
              >
                Sign Up
              </Link>
            </div>

            {/* Profile */}
            <button
              type="button"
              onClick={handleProfileClick}
              aria-label="Profile"
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                text-green-600
                transition
                hover:bg-green-50
                hover:text-green-800
              "
            >
              <User size={20} className="sm:h-[21px] sm:w-[21px]" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="
                relative
                flex h-9 w-9
                items-center justify-center
                rounded-full
                text-green-600
                transition
                hover:bg-green-50
                hover:text-green-800
              "
            >
              <ShoppingCart
                size={20}
                className="sm:h-[21px] sm:w-[21px]"
              />

              {cartItems.length > 0 && (
                <span
                  className="
                    absolute
                    -right-0.5
                    -top-0.5
                    flex
                    min-h-[17px]
                    min-w-[17px]
                    items-center
                    justify-center
                    rounded-full
                    bg-green-600
                    px-1
                    text-[10px]
                    font-semibold
                    leading-none
                    text-white
                    sm:text-[11px]
                  "
                >
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-md
                text-green-600
                transition
                hover:bg-green-50
                md:hidden
              "
            >
              {open ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          className="
            border-t
            border-gray-100
            bg-white
            shadow-lg
            md:hidden
          "
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-4">

            {/* Navigation */}
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={closeMenu}
                  className="
                    border-b
                    border-gray-100
                    py-3
                    text-sm
                    font-medium
                    text-green-600
                    transition-colors
                    hover:bg-green-50
                    hover:text-green-800
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Auth buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={closeMenu}
                className="
                  rounded-lg
                  border
                  border-green-600
                  px-4
                  py-2.5
                  text-center
                  text-sm
                  font-medium
                  text-green-600
                  transition
                  hover:bg-green-50
                "
              >
                Sign In
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="
                  rounded-lg
                  bg-green-600
                  px-4
                  py-2.5
                  text-center
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-green-700
                "
              >
                Sign Up
              </Link>
            </div>

            {/* Profile */}
            <button
              type="button"
              onClick={handleProfileClick}
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-gray-50
                px-4
                py-2.5
                text-sm
                font-medium
                text-green-600
                transition
                hover:bg-green-100
              "
            >
              <User size={18} />
              {user ? "My Profile" : "Create Account"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}






