"use client";

import Image from "next/image";
import Banner from "../components/Banner";
import Sections from "@/components/Featured ";
import Testimonials from "@/components/OurUsers ";
import StatsSection from "@/components/Stats";
import BlogSection from "@/components/Blog";
import { useEffect, useState } from "react";
import LatestProduct from "@/components/LatestProducts";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <Banner />
      <LatestProduct products={products}></LatestProduct>
      <Sections></Sections>
      <Testimonials></Testimonials>
      <StatsSection></StatsSection>
      <BlogSection></BlogSection>
    </div>
  );
}
