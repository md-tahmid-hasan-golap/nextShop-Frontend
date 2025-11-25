"use client";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "@/components/AuthContext";
import LatestProductCards from "@/components/LatestProductsCard";

export default function MyProduct() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://next-shop-server-one.vercel.app/myProducts/${user.email}`
        );
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-600 text-center my-4">
        My Added Products
      </h2>

      {products.length === 0 ? (
        <p className="text-center mt-6 text-gray-500">
          You have not added any products yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <LatestProductCards
              showButtons={true}
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}
