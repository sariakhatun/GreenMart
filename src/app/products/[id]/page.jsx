
import React from "react";
import products from "../../../../public/services.json"; // JSON file
import Link from "next/link";

export default function ProductDetails({ params }) {
  const { id } = params;

//   let handlePurchase=()=>{
//     alert("Purchased Successfully")
//   }

  // find product by id
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found</h2>;
  }

  return (
    <div className="max-w-2xl mt-20 mb-12 mx-auto bg-white shadow-lg rounded-2xl p-6 ">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      {/* Name & Category */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Price & Unit */}
      <p className="text-xl font-semibold text-green-600 mb-2">
        ${product.price} <span className="text-gray-500 text-base">{product.unit}</span>
      </p>

      {/* Short & Long Description */}
      <p className="text-gray-700 mb-3">{product.shortDescription}</p>
      <p className="text-gray-500 text-sm mb-4">{product.longDescription}</p>

      {/* Stock & Rating */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-700">
          Stock: <span className="text-gray-900">{product.stock}</span>
        </span>
        <span className="text-sm font-medium text-yellow-500">
          ⭐ {product.rating}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
       {/* Purchase Button */}
      
        <button className="w-full py-3 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors">
          Purchase
        </button>
     

      {/* ID shown at bottom for reference */}
      <p className="text-xs text-gray-400">Product ID: {product.id}</p>
    </div>
  );
}
