"use client";

import LatestProductCards from "./LatestProductsCard";

export default function LatestProduct({ products }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Latest Products
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products.map((product) => (
          <LatestProductCards key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
