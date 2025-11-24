"use client";

import Link from "next/link";
import { FaInfoCircle, FaEdit, FaTrash } from "react-icons/fa";

export default function LatestProductCards({ product }) {
  const { _id, category, imageUrl, price, priority, shortDescription, title } =
    product;

  // Functions
  const handleUpdate = () => {
    console.log("Update clicked for:", _id);
  };

  const handleDelete = () => {
    console.log("Delete clicked for:", _id);
  };

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 p-4 flex flex-col items-center text-center relative">
      {/* Product Image */}
      <img
        src={imageUrl || "https://via.placeholder.com/300x200"}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Product Category */}
      <p className="text-sm font-medium text-amber-600 mb-2">{category}</p>

      {/* Product Title */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      {/* Short Description */}
      <p className="text-gray-600 text-sm md:text-base mb-4">
        {shortDescription || "No description available."}
      </p>

      {/* Price and Priority */}
      <div className="flex items-center justify-between w-full px-2 mb-4">
        <span className="text-amber-600 font-bold text-lg">${price || 0}</span>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          {priority || "Normal"}
        </span>
      </div>

      {/* Action Icons */}
      <div className="flex items-center justify-center gap-4 mt-auto">
        {/* Details Link */}
        <Link
          href={`/productsDetails/${_id}`} // Next.js dynamic route
          className="text-blue-600 hover:text-blue-800 text-lg"
          title="Details"
        >
          <FaInfoCircle />
        </Link>

        {/* Update button */}
        <button
          onClick={handleUpdate}
          className="text-amber-600 hover:text-amber-800 text-lg"
          title="Update"
        >
          <FaEdit />
        </button>

        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 text-lg"
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
