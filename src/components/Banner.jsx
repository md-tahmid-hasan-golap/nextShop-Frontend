"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {/* Slide 1 - Add Product */}
        <div className="relative h-80 md:h-96 bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 flex flex-col justify-center items-start p-6 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Add Your Products
          </h2>
          <p className="text-white text-lg md:text-2xl mb-6">
            Quickly add new products to your store
          </p>
          <Link href="/addProduct">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
              Add Product
            </button>
          </Link>
        </div>

        {/* Slide 2 - About */}
        <div className="relative h-80 md:h-96 bg-gradient-to-r from-teal-400 via-sky-400 to-blue-500 flex flex-col justify-center items-start p-6 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h2>
          <p className="text-white text-lg md:text-2xl mb-6">
            Learn more about our mission and values
          </p>
          <Link href="/about">
            <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
              About
            </button>
          </Link>
        </div>

        {/* Slide 3 - Contact */}
        <div className="relative h-80 md:h-96 bg-gradient-to-r from-green-500 to-teal-400 flex flex-col justify-center items-start p-6 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-white text-lg md:text-2xl mb-6">
            Get in touch for any inquiries or support
          </p>
          <Link href="/contact">
            <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
              Contact
            </button>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
