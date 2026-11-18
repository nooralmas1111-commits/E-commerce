"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  function placeOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (cart.length === 0) return;

    const order = {
      name,
      email,
      address,
      items: cart,
      total,
      date: new Date().toISOString()
    };

    const oldOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, order])
    );

    clearCart();
    router.push("/orders");
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-bold">Your cart is empty!</h2>
      </div>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={placeOrder} className="space-y-5">

        <input
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full border p-4 rounded-lg"
        />

        <input
          required
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full border p-4 rounded-lg"
        />

        <textarea
          required
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="Delivery Address"
          className="w-full border p-4 rounded-lg h-32"
        />

        <div className="bg-gray-100 p-5 rounded-lg">
          <h3 className="font-bold">
            Total: Rs. {total.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Demo checkout – no real payment will be processed.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-700"
        >
          Place Order
        </button>

      </form>
    </main>
  );
}