"use client";

import { useState } from "react";
import LatestProductCards from "./LatestProductsCard";

export default function LatestProduct({ products }) {
  const [productList, setProductList] = useState(products);

  const handleDeleteFromUI = (_id) => {
    setProductList((prev) => prev.filter((p) => p._id !== _id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-amber-600 mb-8">
        Latest Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productList.map((product) => (
          <LatestProductCards
            key={product._id}
            product={product}
            showButtons={true} // এখানে showButtons true দিলাম
            onDelete={handleDeleteFromUI} // parent callback পাঠানো
          />
        ))}
      </div>
    </div>
  );
}
