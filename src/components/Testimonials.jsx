import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amina Rahman",
      location: "Dhaka, Bangladesh",
      review:
        "LuxTrip made my family trip so smooth! The car was premium and the booking process was effortless. Highly recommend!",
      rating: 5,
      image: "https://i.ibb.co.com/RGrc1BMD/custom1.jpg",
    },
    {
      id: 2,
      name: "Rafiul Hasan",
      location: "Chittagong, Bangladesh",
      review:
        "Great experience! I could book a vehicle in minutes and it was delivered right on time. Very professional service.",
      rating: 4,
      image: "https://i.ibb.co.com/v6xtZwjr/custom2.jpg",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      location: "Sylhet, Bangladesh",
      review:
        "Loved the convenience and reliability. The driver was friendly and the rates were reasonable. Will definitely take their service again!",
      rating: 5,
      image: "https://i.ibb.co.com/PGLXcHQL/custom3.jpg",
    },
 
  ];

  return (
 
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map(({ id, name, location, review, rating, image }) => (
          <div key={id} className="bg-white shadow-lg rounded-2xl p-6 hover:scale-125 transition-transform duration-300 relative">
            <FaQuoteLeft className="text-orange-400 text-3xl absolute top-4 left-4 opacity-50" />
            <Image
              src={image}
              alt={name}
              width={16}
              height={16}
              className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-primary mb-2">{location}</p>
            <p className="text-accent mb-3 italic">{review}</p>
            <div className="flex justify-center">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-orange-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default Testimonials;
