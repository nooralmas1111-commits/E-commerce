"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Accessories"];

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <main>
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-16 md:px-16 md:py-24">

  <div className="grid items-center gap-10 md:grid-cols-2">

    {/* Left Content */}
    <div className="z-10 text-white">

      <span className="mb-5 inline-block rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-300">
        New Collection 2026
      </span>

      <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
        Discover Your
        <span className="block text-orange-400">
          Perfect Style
        </span>
      </h1>

      <p className="mb-8 max-w-lg text-base leading-7 text-gray-300 md:text-lg">
        Explore our latest collection of premium products.
        Shop your favorite items at amazing prices with a
        smooth and easy shopping experience.
      </p>

      <div className="flex flex-wrap gap-4">

        <a
          href="#products"
          className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Shop Now
        </a>

        <a
          href="#products"
          className="rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
        >
          Explore Products
        </a>

      </div>

      <div className="mt-10 flex gap-8">
        <div>
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-sm text-gray-400">Products</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">10k+</h3>
          <p className="text-sm text-gray-400">Customers</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">4.9</h3>
          <p className="text-sm text-gray-400">Rating</p>
        </div>
      </div>

    </div>

    {/* Right Image */}
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl"></div>

      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
        alt="Modern shopping collection"
        className="relative z-10 h-[350px] w-full rounded-2xl object-cover shadow-2xl md:h-[450px]"
      />

      <div className="absolute -bottom-5 -left-5 z-20 rounded-xl bg-white p-4 shadow-xl">
        <p className="text-sm text-gray-500">Special Offer</p>
        <h3 className="text-2xl font-bold text-orange-500">Up to 40% OFF</h3>
      </div>
    </div>

  </div>
</section>

      <section id="products" className="px-6 md:px-16 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Products
          </h2>

          <p className="text-gray-500 mt-3">
            Explore our latest collection.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-5 py-3 mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(item => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full ${
                category === item
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No products found.
          </p>
        )}
      </section>
    </main>
  );
}