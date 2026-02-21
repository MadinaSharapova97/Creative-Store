import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../api/products";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";

export default function CategoryBar() {
  const { category } = useParams();

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["categoryProducts", category],
    queryFn: () => getProductsByCategory(category),
  });

  if (isLoading)
    return <Loader />;

  if (error)
    return <div className="text-center py-20 text-red-500">Error loading products</div>;

  return (

    <section className="max-w-7xl mx-auto px-4 py-12 mt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found in this category.
        </p>
      )}
    </div>
  </section>
  );
}
