
import Loader from "@/components/Loader";
import VehicleCard from "@/components/VehicleCard";
import React, { Suspense } from "react";

const page = async() => {
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);

  const data = await fetch('http://localhost:5000/allVehicles')
  const vehicles = await data.json();
//   console.log(vehicles);
  
//   if (loading) {
//     return <Loader></Loader>;
//   }
  return (
    <div className="bg-blue-50 ">
      <div className="container mx-auto">
        <h1 className="text-accent font-bold text-3xl text-center pt-4">
          Explore All Our Vehicle
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 ">
          <Suspense fallback={<Loader></Loader>}>
  {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle._id}
              index={index}
              vehicle={vehicle}
            ></VehicleCard>
          ))}
          </Suspense>
         
        </div>
      </div>
    </div>
  );
};

export default page;
