"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/productsDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">Loading...</p>
    );

  const {
    title,
    shortDescription,
    fullDescription,
    price,
    category,
    priority,
    stock,
    imageUrl,
    date,
  } = product;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 text-center mb-6">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-xl p-6">
        <div className="md:w-1/2 flex justify-center items-start">
          <img
            src={imageUrl || "https://via.placeholder.com/400x300"}
            alt={title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-gray-700 text-base md:text-lg">
            {shortDescription}
          </p>

          <p className="text-gray-600 text-sm md:text-base">
            {fullDescription}
          </p>

          <p className="text-amber-600 font-bold text-xl md:text-2xl">
            Price: ${price}
          </p>

          <p className="text-gray-500">
            <span className="font-medium">Category:</span> {category}
          </p>

          <p className="text-gray-500">
            <span className="font-medium">Priority:</span>{" "}
            <span
              className={`px-2 py-1 rounded ${
                priority === "High"
                  ? "bg-red-100 text-red-700"
                  : priority === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {priority || "Normal"}
            </span>
          </p>

          <p className="text-gray-500">
            <span className="font-medium">Stock:</span>{" "}
            {stock > 0 ? stock : "Out of Stock"}
          </p>

          <p className="text-gray-400 text-sm">
            <span className="font-medium">Added on:</span> {date}
          </p>
        </div>
      </div>
    </div>
  );
}
