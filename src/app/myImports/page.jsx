"use client";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import axios from "axios";
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import Link from "next/link";

export default function MyImports() {
  const { user, loading } = useContext(AuthContext);
  const [imports, setImports] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (user) fetchImports();
  }, [user]);

  const fetchImports = async () => {
    try {
      const res = await axios.get(
        "https://next-shop-server-one.vercel.app/myImports"
      );
      setImports(res.data);
      setLoadingData(false);
    } catch (error) {
      console.error(error);
      setLoadingData(false);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://next-shop-server-one.vercel.app/deleteImportProduct/${id}`
          );
          setImports(imports.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your import has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", "Failed to delete import.", "error");
        }
      }
    });
  };

  if (loading || loadingData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <p className="text-center mt-10 text-purple-600">
        Please login to see your imports.
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          My Imports
        </span>
      </h2>

      {/* Scrollable Table for All Screens */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Priority</th>
              <th className="px-4 py-2 text-left">Stock</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {imports.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={item.imageUrl || "https://via.placeholder.com/60"}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 text-purple-600">{item.title}</td>
                <td className="px-4 py-2 text-purple-600">{item.category}</td>
                <td className="px-4 py-2 text-purple-600">${item.price}</td>
                <td className="px-4 py-2 text-purple-600">{item.priority}</td>
                <td className="px-4 py-2 text-purple-600">{item.stock}</td>
                <td className="px-4 py-2 text-purple-600">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <Link
                    href={`/productsDetails/${item.productId}`}
                    className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:from-pink-600 hover:to-purple-600"
                  >
                    <FaInfoCircle /> Details
                  </Link>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:from-pink-600 hover:to-purple-600"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
