import React from 'react'

export default function WhyChoose() {
  return (
    <div>
      {/* ✅ New Section: Why Choose GreenMart */}
{/* ✅ New Section: Customer Testimonials */}
<section className="bg-gray-50 py-16 px-6">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
    💬 What Our Customers Say
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Testimonial 1 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-600 italic">
        "GreenMart always delivers the freshest fruits and vegetables. I can trust them for my family's health."
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Customer"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium text-gray-800">Sophia Rahman</span>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-600 italic">
        "I love their fast delivery service. Everything arrives fresh and well-packed!"
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/35.jpg"
          alt="Customer"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium text-gray-800">Imran Hossain</span>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-600 italic">
        "Organic products at reasonable prices. GreenMart has become my go-to store."
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Customer"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium text-gray-800">Anika Chowdhury</span>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
