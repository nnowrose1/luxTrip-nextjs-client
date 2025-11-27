'use client'
import { AuthContext } from '@/components/authProvider/AuthContext';
import React, { use } from 'react';
import Swal from 'sweetalert2';

const page = () => {
const {user} = use(AuthContext);

    const handleSubmit = async(e) => {
         e.preventDefault();
    const vehicle_name = e.target.vehicle_name.value;
    const category = e.target.category.value;
    const owner = e.target.owner.value;
    const price_per_day = Number(e.target.price_per_day.value);
    const location = e.target.location.value;
    const checkbox = e.target.availability.checked;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const categories = e.target.categories.value;
    const rating_star = e.target.rating_star.value;
    const avg_rating = Number(e.target.avg_rating.value);
    const rating_count = Number(e.target.rating_count.value);
    const vehicle_owner_email = e.target.vehicle_owner_email.value;
    
    const newVehicle = {
      vehicle_name,
      owner,
      category,
      price_per_day,
      location,
      availability: checkbox,
      description,
      image,
      categories,
      rating_star,
      rating_count,
      avg_rating,
      vehicle_owner_email,
    };

    const res = await fetch("https://luxtrip-nextjs.vercel.app/allVehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVehicle),
    });

    const data = await res.json();
     Swal.fire({
        position: "center",
        icon: "success",
        title: "Your vehicle has been added!",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    // console.log(data); 
    }
    return (
        <div className=" bg-blue-50">
      <div className="container mx-auto  shadow-lg rounded-2xl p-8 pt-8">
      <h2 className="text-accent font-bold text-3xl text-center mb-6">
        Add a Vehicle
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Vehicle Name */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Vehicle Name
          </label>
          <input
            type="text"
            name="vehicle_name"
            required
            className="w-full border dark:text-primary rounded-lg p-2 border-orange-400 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Owner Name */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Owner Name
          </label>
          <input
            type="text"
            name="owner"
            required
            className="w-full border dark:text-primary rounded-lg p-2 border-orange-400 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Category
          </label>
          <select
            name="category"
            required
            className="w-full border dark:text-primary rounded-lg p-2 dark:bg-accent border-orange-400 focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Category</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Van">Van</option>
            <option value="Truck">Truck</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>

        {/* Price per Day */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Price Per Day ($)
          </label>
          <input
            type="number"
            name="price_per_day"
            required
            className="w-full border dark:text-primary rounded-lg p-2 border-orange-400 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            required
            className="w-full dark:text-primary border rounded-lg p-2 border-orange-400 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability"
            className="w-4 h-4 dark:text-primary border-orange-400 text-orange-400 focus:ring-orange-400"
          />
          <label className="text-accent">Available</label>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            required
            className="w-full border dark:text-primary border-orange-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Cover Image URL */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            name="image"
            
            className="w-full border dark:text-primary border-orange-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {/* Rating Star */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Rating Star (⭐)
          </label>
          <input
            type="text"
            name="rating_star"
            placeholder="e.g., ⭐⭐⭐⭐"
            className="w-full border dark:text-primary dark:bg-accent border-orange-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Average Rating */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Average Rating
          </label>
          <input
            type="number"
            step="0.1"
            name="avg_rating"
            placeholder="e.g., 4.5"
            className="w-full border dark:text-primary dark:bg-accent border-orange-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Rating Count */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Rating Count
          </label>
          <input
            type="number"
            name="rating_count"
            placeholder="e.g., 128"
            className="w-full border dark:text-primary dark:bg-accent border-orange-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

            {/* Categories */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Categories
          </label>
          <select
            name="categories"
            required
            className="w-full border dark:text-primary dark:bg-accent border-orange-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Categories</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* User Email (read-only) */}
        <div>
          <label className="block font-medium text-accent mb-1">
            User Email
          </label>
          <input
            type="email"
            name="vehicle_owner_email"
            defaultValue={user?.email}
            readOnly
            className="w-full dark:text-primary border border-orange-400 rounded-lg p-2 bg-gray-100 text-primary cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full btn btn-primary">
          Add Vehicle
        </button>
      </form>
      </div>
    </div>
    );
};

export default page;