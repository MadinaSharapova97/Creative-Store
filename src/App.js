import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/products/Products";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import CategoryBar from "./pages/categoryBar/CategoryBar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:category" element={<CategoryBar />} />
      </Routes>
      <Footer />
    </>

  );
}
