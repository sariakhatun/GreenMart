import React from "react";
import banner from "../../assets/banner3.avif";
import Link from "next/link";
export default function Banner() {
  return (
    <div>
      <div
        className="hero h-[650px] mt-20 rounded-2xl"
        style={{
          backgroundImage: `url(${banner.src}) `,
        }}
      >
        <div className="hero-overlay rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold">
              Fresh & Organic Grocery Delivered to You
            </h1>
            <p className="mb-5 text-lg">
              Explore a wide variety of fresh fruits, vegetables, and daily
              essentials, all sourced from trusted local farms. Healthy shopping
              made easy and convenient!
            </p>
           
            <Link href={'/products'}>
             <button className="btn btn-outline hover:bg-lime-600 hover:text-white border border-lime-500 text-lime-500">
              show all products
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
