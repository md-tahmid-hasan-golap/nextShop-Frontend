"use client";

import LatestProductCards from "@/components/LatestProductsCard";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://next-shop-server-one.vercel.app/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 text-center mb-6">
        All Products
      </h2>

      {/* 🔍 Search Bar (Right Corner + Small) */}
      <div className="w-full flex justify-end mb-6">
        <div className="relative w-48">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full py-2 pl-9 pr-3 border border-amber-500 rounded-lg shadow text-sm
                       focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-amber-600 text-sm" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <LatestProductCards key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3 text-lg">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
