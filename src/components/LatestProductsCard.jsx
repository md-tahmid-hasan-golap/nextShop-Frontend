"use client";

import Link from "next/link";
import { FaInfoCircle, FaEdit, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LatestProductCards({
  product,
  index = 0,
  showButtons = false,
  onDelete,
}) {
  const router = useRouter();
  const { _id, category, imageUrl, price, priority, shortDescription, title } =
    product;
  const { user } = useContext(AuthContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/deleteMyProduct/${_id}`);

        Swal.fire("Deleted!", "Product has been deleted.", "success");

        router.push("/products");

        if (onDelete) onDelete(_id);
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Failed to delete product.", "error");
      }
    }
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform transform 
      hover:scale-105 p-4 flex flex-col items-center text-center relative"
    >
      <img
        src={imageUrl || "https://via.placeholder.com/300x200"}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <p className="text-sm font-medium text-amber-600 mb-2">{category}</p>

      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm md:text-base mb-4">
        {shortDescription || "No description available."}
      </p>

      <div className="flex items-center justify-between w-full px-2 mb-4">
        <span className="text-amber-600 font-bold text-lg">${price || 0}</span>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          {priority || "Normal"}
        </span>
      </div>

      <div className="flex justify-center gap-3 w-full mt-auto text-xl">
        <Link
          href={`/productsDetails/${_id}`}
          className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100 transition"
          title="See Details"
        >
          <FaInfoCircle />
        </Link>

        {showButtons && (
          <>
            <Link
              href={`/updateProduct/${_id}`}
              className="text-yellow-600 hover:text-yellow-800 p-2 rounded-full hover:bg-yellow-100 transition"
              title="Update Product"
            >
              <FaEdit />
            </Link>

            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 transition"
              title="Delete Product"
            >
              <FaTrash />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}
