import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const first25 = data.slice(0, 25);
        setCategories(first25);
        setActiveCategory(first25[0].slug);
      });
  }, []);

  useEffect(() => {
    if (!activeCategory) return;
    setLoading(true);

    fetch(`https://dummyjson.com/products/category/${activeCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* MOBILE CATEGORY SCROLL */}
      <div className="md:hidden mb-6 overflow-x-auto">
        <div className="flex gap-3 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition
                ${activeCategory === cat.slug
                  ? "bg-green-600 text-white"
                  : "bg-green-50 text-green-600"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-8">

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:block w-1/4 border rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4 text-green-600">
            Categories
          </h3>

          <ul className="space-y-2 max-h-[500px] overflow-y-auto">
            {categories.map((cat) => (
              <li
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`cursor-pointer px-3 py-2 rounded-lg text-sm transition
                  ${activeCategory === cat.slug
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-50 text-gray-700"
                  }`}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* PRODUCTS */}
        <main className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4 capitalize">
            {activeCategory?.replace("-", " ")}
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key = { product.id } product = { product } />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
