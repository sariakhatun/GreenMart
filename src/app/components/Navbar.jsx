"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const pathname = usePathname();
  let {data:session,status} = useSession();

  console.log(session)

  const linkClasses = (path) =>
    pathname === path
      ? "text-lime-600 font-semibold" // active style
      : "hover:text-lime-500";        // normal style

  return (
    <div>
      <div className="navbar z-50 fixed top-0 left-0 bg-base-100 px-12 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/" className={linkClasses("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className={linkClasses("/products")}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/add-product" className={linkClasses("/add-product")}>
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl md:text-2xl font-bold"
          >
            🌿 Green<span className="text-lime-600 -ml-2">Mart</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className={linkClasses("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className={linkClasses("/products")}>
                Products
              </Link>
            </li>
            {
              status=='authenticated' &&
              <li>
              <Link href="/add-product" className={linkClasses("/add-product")}>
                Add Product
              </Link>
            </li>
            }
            
          </ul>
        </div>
        <div className="navbar-end">
         <div className="flex gap-2 items-center">
          {
            status == 'authenticated' ? 
          <button onClick={()=>signOut()} className="btn btn-xs btn-outline hover:bg-lime-600 hover:text-white border border-lime-500 text-lime-500">
              Logout
            </button>
        
            
         
          : <>
          <Link href={'/login'}>
          <button className="btn btn-xs btn-outline hover:bg-lime-600 hover:text-white border border-lime-500 text-lime-500">
              Login
            </button>
          </Link>
            
         <Link href={'/register'}>
          <button className="btn btn-xs btn-outline hover:bg-lime-600 hover:text-white border border-lime-500 text-lime-500">
            Register
          </button>
         </Link>
         </>
          }
          
          
         </div>
        </div>
      </div>
    </div>
  );
}
