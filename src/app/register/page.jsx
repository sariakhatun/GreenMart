'use client'
import React from 'react'
import Link from 'next/link'
import { registerUser } from '../actions/auth/registerUser'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function RegisterForm() {
  let router=useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    
  const payload = {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value
  }
    //console.log(name, email, password)
   //await registerUser(payload)
   try {
    const res = await registerUser(payload)
    if (res?.insertedId) {
      // Auto-login
      const loginRes = await signIn('credentials', {
        redirect: false,
        email: payload.email,
        password: payload.password
      })

      if (loginRes?.ok) {
        router.push('/products') // redirect after login
      } else {
        alert('Registered but login failed. Please login manually.')
      }
    } else {
      alert('Registration failed. User may already exist.')
    }
  } catch (err) {
    console.error(err)
    alert('Something went wrong. Please try again.')
  }
  }

  

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      {/* Main Form Section */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-10"
        >
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>

          <label className="form-control w-full mb-4">
            <span className="label-text font-bold mb-2">Name</span>
            <input
              type="text"
              placeholder="Type here"
              className="input mt-2 mb-4 input-bordered w-full"
              name="name"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-bold mb-1">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input mt-2 mb-4 input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-bold mb-1">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input mt-2 mb-4 input-bordered w-full"
              required
            />
          </label>

          <button 
            type="submit" 
            className="w-full h-12 bg-lime-500 text-white font-bold rounded hover:bg-lime-600 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-lime-500 font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Footer */}
      
    </div>
  )
}
