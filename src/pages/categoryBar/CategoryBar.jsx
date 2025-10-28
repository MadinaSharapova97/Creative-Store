import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../api/products";
import Loader from "../../components/Loader";

export default function CategoryPage() {
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
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-600 font-bold">${product.price}</span>
                  <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
                </div>
              </div>
            </div>
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
