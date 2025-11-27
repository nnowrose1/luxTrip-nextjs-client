"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Banner = () => {
  const slide = {
    id: 1,
    image: "https://i.ibb.co/XNQqp0p/family-summer-forest-by-open-trunk.jpg",
    title: "Book & Manage Your Vehicles Seamlessly",
    desc: "Hassle-free vehicle booking, real-time management & easy access — all in one platform.",
  };
  return (
    <div
      className="relative z-0 w-full min-h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('${slide.image}')` }}
    >
   

      {/* Text content */}
      <div className="relative text-center text-white px-5">
        <h2 className="text-4xl text-white md:text-6xl font-bold mb-4 drop-shadow-lg">
          {slide.title}
        </h2>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-6">
          {slide.desc}
        </p>
        <Link href="/allVehicles">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg shadow-lg font-semibold text-white">
            Explore All Vehicles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
