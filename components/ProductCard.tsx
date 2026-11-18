"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export default function ProductCard({
  product
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          unoptimized
          className="w-full h-60 object-cover"
        />
      </Link>

      <div className="p-5">
        <p className="text-sm text-gray-500">{product.category}</p>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold mt-2 hover:text-blue-700">
            {product.name}
          </h3>
        </Link>

        <p className="text-blue-900 font-bold mt-3">
          Rs. {product.price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-900 text-white py-3 rounded-lg mt-4 hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}