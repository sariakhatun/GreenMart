import React from "react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-lime-600">
          Why Shop With GreenMart?
        </h2>
        <p className="text-gray-700 mb-12 text-lg md:text-xl">
          Fresh, organic, and locally sourced groceries delivered right to your doorstep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <div className="text-lime-600 mb-4 text-5xl">🥦</div>
            <h3 className="text-2xl font-semibold mb-3 text-lime-600">Fresh & Organic</h3>
            <p className="text-gray-600">
              Only the freshest produce sourced from trusted local farms.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <div className="text-lime-600 mb-4 text-5xl">🛒</div>
            <h3 className="text-2xl font-semibold mb-3 text-lime-600">Convenient Shopping</h3>
            <p className="text-gray-600">
              Browse and order your groceries online, delivered to your door.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <div className="text-lime-600 mb-4 text-5xl">💰</div>
            <h3 className="text-2xl font-semibold mb-3 text-lime-600">Affordable Prices</h3>
            <p className="text-gray-600">
              Quality groceries at prices that won't hurt your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
