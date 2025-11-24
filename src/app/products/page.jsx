"use client";

import LatestProductCards from "@/components/LatestProductsCard";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 text-center mb-6">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products.map((product) => (
          <LatestProductCards key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
