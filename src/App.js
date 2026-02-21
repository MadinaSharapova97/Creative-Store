import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/products/Products";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import CategoryBar from "./pages/categoryBar/CategoryBar";
import Categories from "./pages/categories/Categories";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { ContextProvider } from "./context/Context";
import Cart from "./pages/cart/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/profile/Profile";

export default function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category" element={<CategoryBar />} />
        {/* <Route path="/category/:name" element={<CategoryBar />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>}
        />


      </Routes>
      <Footer />
    </ContextProvider>

  );
}
