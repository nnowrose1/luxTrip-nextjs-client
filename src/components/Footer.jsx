import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCarSide,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-accent py-10 pt-12 border-t border-orange-200">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaCarSide className="text-orange-400 text-3xl" />
            <h2 className="text-2xl font-bold">
              Lux<span className="text-orange-400">Trip</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            LuxTrip makes your journey smooth and memorable with the best
            vehicle booking and trip management services. Reliable, fast, and
            always by your side.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/allVehicles"
                className="hover:text-orange-400 transition"
              >
                Vehicles
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-orange-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Car Rentals</li>
            <li>Trip Management</li>
            <li>Luxury Travel Plans</li>
            <li>24/7 Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <p className="text-sm">Email: support@luxtrip.com</p>
          <p className="text-sm mb-3">Phone: +880 1700-000000</p>

          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-orange-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-200 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">
          Lux<span className="text-orange-400">Trip</span>
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
