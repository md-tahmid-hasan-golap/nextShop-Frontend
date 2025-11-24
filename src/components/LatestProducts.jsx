"use client";

import LatestProductCards from "./LatestProductsCard";

export default function LatestProduct({ products }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-amber-600 mb-8">
        Latest Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products.map((product) => (
          <LatestProductCards key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
