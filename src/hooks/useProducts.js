import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getProductById,
  getAllCategories,
  getProductsByCategory,
} from "../api/products";

// 🛍 Barcha mahsulotlar uchun hook
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

// 🧩 Bitta mahsulotni olish uchun hook
export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id, // faqat id mavjud bo‘lsa chaqiriladi
  });
};

// 🏷 Barcha kategoriyalar uchun hook
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
};

// 📦 Tanlangan kategoriya uchun mahsulotlar
export const useProductsByCategory = (category) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category, // faqat kategoriya tanlanganda chaqiriladi
  });
};
