'use client'
import React, { useState } from 'react'

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    unit: '',
    category: '',
    shortDescription: '',
    longDescription: '',
    stock: '',
    rating: '',
    tags: ''
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
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock),
          rating: parseFloat(formData.rating),
          tags: formData.tags.split(',').map(tag => tag.trim())
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage('✅ Product added successfully!')
        setFormData({
          name: '',
          image: '',
          price: '',
          unit: '',
          category: '',
          shortDescription: '',
          longDescription: '',
          stock: '',
          rating: '',
          tags: ''
        })
      } else {
        setMessage('❌ ' + (data.error || 'Failed to add product'))
      }
    } catch (err) {
      setMessage('❌ Error: ' + err.message)
    }

    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto mt-24 mb-12 p-6 border rounded-xl shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
      {message && <p className="mb-4 text-center text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded col-span-2"/>
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required className="border p-2 rounded col-span-2"/>
        <input type="number" step="0.01" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required className="border p-2 rounded"/>
        <input name="unit" placeholder="Unit (e.g. per lb)" value={formData.unit} onChange={handleChange} required className="border p-2 rounded"/>
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required className="border p-2 rounded col-span-2"/>
        <textarea name="shortDescription" placeholder="Short Description" value={formData.shortDescription} onChange={handleChange} required rows={2} className="border p-2 rounded col-span-2"/>
        <textarea name="longDescription" placeholder="Long Description" value={formData.longDescription} onChange={handleChange} rows={3} className="border p-2 rounded col-span-2"/>
        <input type="number" name="stock" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} required className="border p-2 rounded"/>
        <input type="number" step="0.1" name="rating" placeholder="Rating (0-5)" value={formData.rating} onChange={handleChange} required className="border p-2 rounded"/>
        <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="border p-2 rounded col-span-2"/>
        <button type="submit" disabled={loading} className="col-span-2 bg-lime-500 text-white py-2 px-4 rounded hover:bg-lime-600 transition">
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  )
}
