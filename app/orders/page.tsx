"use client";

import Link from "next/link";

export default function OrdersPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">

      <div className="bg-green-100 text-green-700 w-20 h-20 rounded-full flex items-center justify-center text-4xl">
        ✓
      </div>

      <h1 className="text-3xl font-bold mt-6">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-500 mt-3">
        Thank you for shopping with ShopEase.
      </p>

      <Link
        href="/"
        className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-lg"
      >
        Continue Shopping
      </Link>

    </main>
  );
}