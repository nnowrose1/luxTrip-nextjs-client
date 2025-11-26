import React from 'react';
import VehicleCard from './VehicleCard';

const LatestVehicles = async() => {

const data = await fetch('http://localhost:5000/latestVehicles')
  const latestVehicles = await data.json();
    return (
         <section className="pt-12 bg-blue-50">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 text-center">
           <span className="text-orange-400">Latest</span> Vehicles
        </h2>
        <p className="text-accent max-w-2xl mx-auto mb-8">
         Discover our newest additions — from sleek sedans to powerful SUVs, each vehicle is carefully selected to ensure comfort, safety, and style. Whether you’re planning a weekend getaway or a business trip, our latest rides are ready to make your journey smooth and memorable.
        </p>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {latestVehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
      ))}
    </div>
      </div>
    </section>
    );
};

export default LatestVehicles;