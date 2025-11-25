"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

export default function ProductsDetails() {
  const router = useRouter();
  const { id } = useParams();
  const { user, loading } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [productLoading, setProductLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (!id) return;

    fetch(`https://next-shop-server-one.vercel.app/productsDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setProductLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setProductLoading(false);
      });
  }, [id]);

  const LoadingUI = () => (
    <div className="flex justify-center items-center h-screen gap-3">
      <span className="loading loading-ring loading-xl"></span>
      <span className="loading loading-ring loading-xl"></span>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );

  const handleImportNow = async () => {
    if (!product) return;

    const importData = {
      productId: product._id,
      title: product.title,
      shortDescription: product.shortDescription,
      fullDescription: product.fullDescription,
      price: product.price,
      category: product.category,
      priority: product.priority,
      stock: product.stock,
      imageUrl: product.imageUrl,
      date: product.date,
    };

    try {
      const res = await axios.post("http://localhost:5000/imports", importData);
      console.log("POST response:", res.data);

      Swal.fire({
        title: "Success!",
        text: "Product imported successfully!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        router.push("/myImports");
      }, 1500);
    } catch (error) {
      console.error("POST error:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to import product.",
        icon: "error",
      });
    }
  };

  if (loading) return <LoadingUI />;
  if (!user) return null;
  if (productLoading) return <LoadingUI />;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-amber-600 text-center mb-8">
        {product.title}
      </h1>

      {/* Back to Home Button */}
      <div className="mb-4">
        <button
          onClick={() => router.push("/")}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          ⬅ Back to Home
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-xl p-6">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-gray-700 text-lg">{product.shortDescription}</p>
          <p className="text-gray-600">{product.fullDescription}</p>

          <p className="text-amber-600 font-bold text-2xl">
            Price: ${product.price}
          </p>

          <p className="text-gray-500">
            <span className="font-medium">Category:</span> {product.category}
          </p>

          <p className="text-gray-500">
            <span className="font-medium">Priority:</span>{" "}
            <span
              className={`px-2 py-1 rounded ${
                product.priority === "High"
                  ? "bg-red-100 text-red-600"
                  : product.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {product.priority}
            </span>
          </p>

          <p className="text-gray-500">
            <span className="font-medium">Stock:</span>{" "}
            {product.stock > 0 ? product.stock : "Out of Stock"}
          </p>

          <p className="text-gray-400 text-sm">
            <span className="font-medium">Added on:</span> {product.date}
          </p>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleImportNow}
              disabled={!product}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
            >
              Import Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
