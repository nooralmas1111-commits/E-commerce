"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const count = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-5 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-blue-900">
        ShopEase.
      </Link>

      <div className="flex gap-6 items-center text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-700">Home</Link>

        <Link href="/#products" className="hover:text-blue-700">
          Products
        </Link>

        <Link href="/cart" className="hover:text-blue-700">
          Cart ({count})
        </Link>
      </div>
    </nav>
  );
}