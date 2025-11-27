"use client";
import { AuthContext } from "@/components/authProvider/AuthContext";
import MyVehicleCard from "@/components/MyVehicleCard";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const page =  () => {
  const { user } = useContext(AuthContext);
  const [myVehicles, setMyVehicles] = useState([]);

  useEffect(() => {
    if (!user) return;

    fetch(`https://luxtrip-nextjs.vercel.app/myVehicles?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMyVehicles(data));
  }, [user]);

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`https://luxtrip-nextjs.vercel.app/allVehicles/${_id}`, {
          method: "DELETE",
        });

        const remainingVehicles = myVehicles.filter((v) => v._id !== _id);
        setMyVehicles(remainingVehicles);
        Swal.fire({
          title: "Deleted!",
          text: "Your Vehicle has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="bg-blue-50 ">
      <div className="container mx-auto">
        <h2 className="text-accent font-bold text-3xl text-center pt-8">
          My Vehicles
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8">
          {myVehicles.map((vehicle, index) => (
            <MyVehicleCard
              key={vehicle._id}
              index={index}
              vehicle={vehicle}
              handleDelete={handleDelete}
            ></MyVehicleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
