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

    // ✅ Check if user is logged in
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
      .post("https://next-shop-ten-ruby.vercel.app/products", data)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Product Added Successfully!",
          icon: "success",
          confirmButtonColor: "#f59e0b",
        });

        form.reset(); // form reset
        router.push("/myProducts"); // ✅ redirect after success
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-amber-600">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Short Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            placeholder="Short Description"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Full Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Full Description</label>
          <input
            type="text"
            name="fullDescription"
            placeholder="Full Description"
            className="w-full border border-gray-300 rounded px-3 py-2 h-28"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block mb-1 font-medium">Priority</label>
          <input
            type="text"
            name="priority"
            placeholder="Priority"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-1 font-medium">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Image URL */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
