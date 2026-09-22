
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const first25 = data.slice(0, 25);

        setCategories(first25);

        if (first25.length > 0) {
          setActiveCategory(first25[0].slug);
        }
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
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, [activeCategory]);

  const handleCategorySelect = (slug) => {
    setActiveCategory(slug);
    setCategoryOpen(false);
  };

  const activeCategoryName =
    categories.find((cat) => cat.slug === activeCategory)?.name ||
    "Category";

  return (
    <div className="mx-auto max-w-7xl px-4 py-20">

      {/* ================= MOBILE CATEGORY ================= */}
      <div className="relative mb-6 md:hidden">

        <button
          type="button"
          onClick={() => setCategoryOpen((prev) => !prev)}
          className="
            flex
            w-[170px]
            items-center
            justify-between
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-3
            text-sm
            font-medium
            text-gray-700
            shadow-sm
            transition
            hover:border-green-500
          "
        >
          <span>
            {activeCategoryName}
          </span>

          <svg
            className={`h-5 w-5 transition-transform ${categoryOpen ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown */}
        {categoryOpen && (
          <div
            className="
              absolute
              left-0
              right-0
              z-50
              mt-2
              max-h-72
              overflow-y-auto
              rounded-xl
              border
              border-gray-200
              bg-white
              p-2
              shadow-lg
            "
          >
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleCategorySelect(cat.slug)}
                className={`
                  w-full
                  rounded-lg
                  px-3
                  py-2.5
                  text-left
                  text-sm
                  transition
                  ${activeCategory === cat.slug
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="flex items-start gap-8 py-8">

        {/* ================= DESKTOP SIDEBAR ================= */}
        <aside
          className="
            hidden
            w-1/4
            shrink-0
            rounded-xl
            border
            bg-white
            p-4
            md:block
          "
        >
          <h3 className="mb-4 text-lg font-semibold text-green-600">
            Categories
          </h3>

          <ul className="max-h-[500px] space-y-2 overflow-y-auto pr-1">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`
                    w-full
                    rounded-lg
                    px-3
                    py-2
                    text-left
                    text-sm
                    transition
                    ${activeCategory === cat.slug
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-green-50"
                    }
                  `}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* ================= PRODUCTS ================= */}
        <main className="min-w-0 flex-1">

          <h2 className="mb-4 text-xl font-bold capitalize text-green-600 md:text-2xl">
            {activeCategory?.replaceAll("-", " ")}
          </h2>

          {loading ? (
            <Loader />
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No products found.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

