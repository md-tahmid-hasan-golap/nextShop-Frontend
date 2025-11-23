"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-600 text-white py-12 rounded-md shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Links */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start font-medium">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-amber-200"
          >
            Home
          </Link>
          <Link
            href="/addProduct"
            className="transition-colors duration-300 hover:text-amber-200"
          >
            Add Product
          </Link>
          <Link
            href="/about"
            className="transition-colors duration-300 hover:text-amber-200"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-amber-200"
          >
            Contact
          </Link>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/md-tahmid-hasan-golap"
            target="_blank"
            className="transition-transform transform hover:scale-125 hover:text-gray-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/g.lap.raj"
            target="_blank"
            className="transition-transform transform hover:scale-125 hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/tahmid-hasan-golap/?locale=en_US"
            target="_blank"
            className="transition-transform transform hover:scale-125 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-center md:text-right opacity-90">
          © 2025 MyShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
