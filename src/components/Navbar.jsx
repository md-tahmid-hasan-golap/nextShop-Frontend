"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Add Product", href: "/addProduct" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Left: Logo */}
        <h2 className="text-2xl font-bold text-amber-600 md:text-3xl lg:text-4xl">
          MyShop
        </h2>

        {/* Center: Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md font-medium ${
                  pathname === link.href
                    ? "text-[#CAEB66] bg-black"
                    : "text-amber-600 hover:text-amber-800"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Desktop Login/Register */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="px-3 py-2 border rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t flex flex-col p-4 gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md font-medium ${
                pathname === link.href
                  ? "text-[#CAEB66] bg-black"
                  : "text-amber-600 hover:text-amber-800"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Login/Register */}
          <div className="flex gap-2 mt-2">
            <Link
              href="/login"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
