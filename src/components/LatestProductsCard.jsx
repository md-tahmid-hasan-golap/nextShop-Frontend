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
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
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
        await axios.delete(
          `https://next-shop-server-one.vercel.app/deleteMyProduct/${_id}`
        );
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
      className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 p-4 flex flex-col items-center text-center relative"
    >
      <img
        src={imageUrl || "https://via.placeholder.com/300x200"}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
        {category}
      </p>

      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm md:text-base mb-4">
        {shortDescription || "No description available."}
      </p>

      <div className="flex items-center justify-between w-full px-2 mb-4">
        <span className="text-gray-900 font-bold text-lg">${price || 0}</span>
        <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
          {priority || "Normal"}
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-3 w-full mt-auto">
        {/* View Button */}
        <Link
          href={`/productsDetails/${_id}`}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold 
               bg-gradient-to-r from-purple-500 to-pink-500 shadow hover:opacity-90 transition 
               w-full sm:w-auto"
        >
          <FaInfoCircle className="text-white" />
          View
        </Link>

        {showButtons && (
          <>
            {/* Update Button */}
            <Link
              href={`/updateProduct/${_id}`}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold 
                   bg-yellow-500 shadow hover:bg-yellow-600 transition 
                   w-full sm:w-auto"
            >
              <FaEdit className="text-white" />
              Update
            </Link>

            {/* Delete Button */}
            <button
              onClick={handleDelete}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold 
                   bg-red-600 shadow hover:bg-red-700 transition 
                   w-full sm:w-auto"
            >
              <FaTrash className="text-white" />
              Delete
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}
