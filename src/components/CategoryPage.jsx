import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, [name]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 capitalize">{name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((p) => (
          <div key={p.id} className="border rounded-xl p-5 shadow">
            <img
              src={p.thumbnail}
              className="w-full h-48 object-cover rounded-lg mb-3"
              alt={p.title}
            />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-green-600 font-bold">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
