import { formatDistanceToNow, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const MyVehicleCard = ({ vehicle, handleDelete}) => {
    const { _id } = vehicle;

    const getAddTime = (dateString) => {
    if (!dateString) return "Unknown date";

    // Parse the MongoDB ISO string
    const parsedDate = parseISO(dateString);

    // Return how long ago it was added
    return formatDistanceToNow(parsedDate, { addSuffix: true });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
      <Image
        width={30}
        height={48}
        src={vehicle?.image}
        alt={vehicle?.vehicle_name}
        className="w-full h-48 object-cover rounded-2xl p-2"
      />

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
        <p className="text-sm text-orange-400 mt-2">
          Added {getAddTime(vehicle?.createdAt)}
        </p>
        {/* <div
          className={`text-sm font-medium mb-3 ${
            vehicle?.availability ? "text-green-600" : "text-red-500"
          }`}
        >
          {available}
        </div> */}
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
        </div>{" "}
        <div className="flex gap-3">
          <Link href={`/allVehicles/${_id}`}>
            {" "}
            <button className="btn bg-linear-to-r from-gray-900 to-gray-600 font-semibold text-white py-2 px-4 rounded-lg shadow-md hover:text-md hover:shadow-lg transition-all duration-300">
              View Details
            </button>
          </Link>

          <button className="btn bg-linear-to-r from-orange-500 to-orange-300  font-semibold text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Update Vehicle
          </button>

          <button
            onClick={() => handleDelete(vehicle._id)}
            className="btn btn-primary "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyVehicleCard;
