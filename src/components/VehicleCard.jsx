import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const VehicleCard = ({ vehicle, index }) => {
  const { _id } = vehicle;

  const available = vehicle?.availability ? "Available" : "Unavailable";

  return (
    <div className="bg-white hover:-translate-y-4 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm ">
      <div>
        <Image
          src={vehicle?.image}
          alt={vehicle?.vehicle_name}
          width={30}
          height={48}
          className="w-full h-48 object-cover p-2 rounded-2xl"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-lg font-semibold text-accent">
            {vehicle?.vehicle_name}
          </h2>
          <p className="text-xl font-bold text-orange-400">
            ${vehicle?.price_per_day}
            <span className="text-sm font-normal text-primary">/day</span>
          </p>
        </div>

        <p className="text-sm text-primary mb-2">{vehicle?.category}</p>

        <div
          className={`text-sm font-medium mb-3 ${
            vehicle?.availability ? "text-green-600" : "text-red-500"
          }`}
        >
          {available}
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              size={18}
              fill={
                index < Math.round(vehicle?.avg_rating) ? "#facc15" : "none"
              }
              stroke="#facc15"
            />
          ))}
          <span className="text-accent text-sm ml-1 font-medium">
            {vehicle?.avg_rating} ({vehicle?.rating_count})
          </span>
        </div>
        <Link href={`/allVehicles/${_id}`}>
          {" "}
          <button className="btn btn-primary w-full">View Details</button>
          {/* <button className="btn btn-primary w-full">View Details</button> */}
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
