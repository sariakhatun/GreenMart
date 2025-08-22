'use client'
import React, { useState } from 'react'

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // TODO: replace with your API call
      console.log('Product data to submit:', formData)
      setMessage('Product added successfully!')
      setFormData({ name: '', price: '', category: '', image: '', description: '' })
    } catch (err) {
      setMessage('Error: ' + err.message)
    }

    setLoading(false)
  }

  return (
    <div className="max-w-lg mx-auto mt-24 mb-12 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
      {message && <p className="mb-4 text-center text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-lime-500 text-white py-2 px-4 rounded hover:bg-lime-600"
        >
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  )
}
