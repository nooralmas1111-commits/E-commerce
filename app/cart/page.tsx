"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">Your cart is empty!</h2>
          <Link href="/" className="text-blue-700 mt-5 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">

          <div className="md:col-span-2 space-y-5">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-wrap items-center gap-5 bg-white p-5 rounded-xl shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  unoptimized
                  className="rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-blue-900 font-bold mt-2">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    -
                  </button>

                  {item.quantity}

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-xl h-fit">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>

            <div className="flex justify-between mb-5">
              <span>Total</span>
              <span className="font-bold">
                Rs. {total.toLocaleString()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="block text-center bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>

        </div>
      )}
    </main>
  );
}