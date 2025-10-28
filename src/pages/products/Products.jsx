// src/pages/Products.jsx
import React from "react";
import ProductCard from "../../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";

const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  // console.log(await res.json());
  
  return res.json();
};

export default function Products() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Loader/>;
  if (isError) return <p className="p-10 text-red-500">Something went wrong</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
