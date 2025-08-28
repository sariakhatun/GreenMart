import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Link from "next/link";

export default async function ProductHighlights() {
  let products = [];

  try {
    const collection = await dbConnect(collectionNamesObj.productionCollection);
    products = await collection.find({}).limit(6).toArray();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-full mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center">Product Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.shortDescription}</p>
                <p className="font-bold text-lg mb-2">
                  ${product.price} {product.unit}
                </p>
                <p className="text-yellow-500 mb-4">Rating: {product.rating} ⭐</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-lime-100 text-lime-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/products/${product._id}`}
                  className="mt-auto bg-lime-500 text-white text-center py-2 rounded hover:bg-lime-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
