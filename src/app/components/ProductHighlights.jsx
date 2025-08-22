"use client";
import Link from "next/link";
import React from "react";

// ✅ Pass your products array as prop
export default function ProductHighlights({ products }) {
  // Sort by rating & pick top 6
  const topProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        🌟 Product Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full mx-auto">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {product.shortDescription}
            </p>
            <p className="text-lime-600 font-bold mt-2">
              ${product.price} <span className="text-gray-500">{product.unit}</span>
            </p>
            <div className="mt-2 flex items-center text-yellow-500 text-sm">
              {"⭐".repeat(Math.round(product.rating))}{" "}
              <span className="ml-2 text-gray-600 ">({product.rating})</span> 
              
            </div>
            <Link href={`/products/${product.id}`}>
               <button className="mt-3 w-full px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600">
                Details
              </button>
              </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
