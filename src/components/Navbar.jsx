"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import Swal from "sweetalert2";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  // Base links
  const baseLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Private links
  const privateLinks = user
    ? [
        { name: "My Products", href: "/myProducts" },
        { name: "Add Product", href: "/addProduct" },
        { name: "My Imports", href: "/myImports" },
      ]
    : [];

  const links = [
    ...baseLinks.slice(0, 2),
    ...privateLinks,
    ...baseLinks.slice(2),
  ];

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged out!",
          text: "You have successfully logged out.",
          icon: "success",
          timer: 1500,
          willClose: () => router.push("/"),
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
          <span className="text-purple-600">My</span>
          <span className="text-pink-600">Shop</span>
        </h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md font-medium ${
                  pathname === link.href
                    ? "text-[#CAEB66] bg-black"
                    : "text-black hover:text-blue-600 font-bold hover:underline"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <div className="relative group flex flex-col items-center">
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* ⭐ Mobile Top Right: Avatar + Logout + Menu */}
        <div className="md:hidden flex items-center gap-3">
          {user && (
            <div className="flex items-center gap-2">
              <img
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                className="w-8 h-8 rounded-full border"
              />

              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
              >
                Logout
              </button>
            </div>
          )}

          {/* ⭐ Updated Menu Button */}
          <button
            className="px-3 py-2 border rounded bg-black text-white font-bold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
      </div>

      {/* ⭐ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t flex flex-col p-4 gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md font-medium ${
                pathname === link.href
                  ? "text-[#CAEB66] bg-black"
                  : "text-black hover:text-blue-600 font-bold hover:underline"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-2 mt-2 items-center">
            {user ? (
              <>
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  className="w-8 h-8 rounded-full border"
                />

                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* ⭐ REGISTER Hidden in Mobile */}
                <Link
                  href="/login"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
