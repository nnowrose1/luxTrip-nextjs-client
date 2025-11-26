import React from "react";
import {
  FaShieldAlt,
  FaCarSide,
  FaClock,
  FaMapMarkedAlt,
  FaWallet,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-orange-400 w-10 h-10" />,
      title: "Trusted & Verified",
      desc: "All our vehicles and owners are verified to ensure complete safety and reliability.",
    },
    {
      icon: <FaCarSide className="text-orange-400 w-10 h-10" />,
      title: "Wide Range of Vehicles",
      desc: "From sedans and SUVs to electric cars — find the perfect ride for every journey.",
    },
    {
      icon: <FaClock className="text-orange-400 w-10 h-10" />,
      title: "Instant Booking",
      desc: "Book instantly and hit the road — no waiting, no delays.",
    },
    {
      icon: <FaMapMarkedAlt className="text-orange-400 w-10 h-10" />,
      title: "Smart Trip Management",
      desc: "Plan, manage, and track your trip with our easy-to-use trip management system.",
    },
    {
      icon: <FaWallet className="text-orange-400 w-10 h-10" />,
      title: "Transparent Pricing",
      desc: "Affordable rates with zero hidden fees — what you see is what you pay.",
    },
    {
      icon: <FaHeadset className="text-orange-400 w-10 h-10" />,
      title: "24/7 Customer Support",
      desc: "Our support team is available day and night to help you anytime, anywhere.",
    },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 data-aos="fade-left" className="text-3xl md:text-4xl font-bold text-accent mb-4">
          Why <span className="text-orange-400">Choose</span> Us?
        </h2>
        <p data-aos="fade-right" className="text-accent max-w-2xl mx-auto mb-8">
          Experience the freedom of effortless travel. We make booking and managing your trips simple, safe, and stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-accent mb-2">
                {feature.title}
              </h3>
              <p className="text-primary">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
