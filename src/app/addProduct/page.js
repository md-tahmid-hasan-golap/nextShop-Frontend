"use client";

import { AuthContext } from "@/components/AuthContext";
import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const { user } = useContext(AuthContext); 
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "Please login first!",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.date = new Date();
    data.email = user.email;

    axios
      .post("https://next-shop-server-one.vercel.app/products", data)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Product Added Successfully!",
          icon: "success",
          confirmButtonColor: "#f59e0b",
        });

        form.reset();
        router.push("/myProducts");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
        console.log("Error:", error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md my-7">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Add Product
        </span>
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium text-black">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter product title"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Short Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700 text-sm">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            placeholder="Brief description"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Full Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700 text-sm">Full Description</label>
          <textarea
            name="fullDescription"
            placeholder="Detailed description"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition h-28 resize-none"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-sm">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-sm">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-sm">Priority</label>
          <input
            type="text"
            name="priority"
            placeholder="High / Medium / Low"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-sm">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="Available stock"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Image URL */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700 text-sm">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (optional)"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full py-2 rounded text-white font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
