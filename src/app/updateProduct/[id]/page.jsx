"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

export default function UpdateProduct() {
  const { id } = useParams(); // [id] route
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/productsDetails/${id}`
        );
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await axios.put(`http://localhost:5000/updateImportProduct/${id}`, data);

      // SweetAlert success
      await Swal.fire({
        title: "Success!",
        text: "Product updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Redirect to myImports page
      router.push("/myProducts");
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Failed to update product.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-amber-600">
        Update Product
      </h1>

      <form
        onSubmit={handleUpdateProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={product.title}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            defaultValue={product.shortDescription}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Full Description</label>
          <textarea
            name="fullDescription"
            defaultValue={product.fullDescription}
            className="w-full border border-gray-300 rounded px-3 py-2 h-28"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={product.price}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={product.category}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Priority</label>
          <input
            type="text"
            name="priority"
            defaultValue={product.priority}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Stock</label>
          <input
            type="number"
            name="stock"
            defaultValue={product.stock}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            defaultValue={product.imageUrl}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}
