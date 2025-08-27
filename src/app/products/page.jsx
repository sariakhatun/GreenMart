// app/products/page.jsx
import React from 'react';
//import products from '../../../public/services.json'; // or wherever your JSON file is
import Link from 'next/link';
import dbConnect from '@/lib/dbConnect';

export default async function Products() {
  // Get the "products" collection
  const productsCollection = await dbConnect("services");
  
  // Fetch all products
  const products = await productsCollection.find({}).toArray();
  

  return (
     <div className="py-6 mt-12 max-w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
              <p className=" mt-2">{product.shortDescription}</p>
              <Link href={`/products/${product._id.toString()}`}>

              <button className="mt-3 w-full px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600">
                Details
              </button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
