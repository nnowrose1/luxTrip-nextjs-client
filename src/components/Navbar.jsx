"use client";
import Link from "next/link";
import React, { use } from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AuthContext } from "./authProvider/AuthContext";
import toast from "react-hot-toast";
import Image from "next/image";

const Navbar = () => {
  const { user, logOut, setUser } = use(AuthContext);

  const links = (
    <>
      <li className="font-semibold text-accent">
        <Link href="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link href="/allVehicles">All Vehicles</Link>
      </li>
      <li className="font-semibold">
        <Link href="/myVehicles">My Vehicles</Link>
      </li>
      
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logged Out Successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <nav className="navbar shadow-sm  text-accent z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="text-lg md:text-2xl font-bold flex flex-col items-center md:flex-row">
          {/* <img className="w-10 md:w-14 h-10 md:h-14 rounded-full font-extrabold" src={logo} alt="" /> */}
          <h1>
            Lux<span className="text-orange-400">Trip</span>
          </h1>
          {/* <span className="text-orange-400">Lux</span>Trip */}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {/* Tooltip from daisyUI */}

        <div
          className="tooltip mr-2"
          data-tip={user?.displayName ? user?.displayName : "User"}
        >
          {user && (
           <div className="dropdown dropdown-start">
         {/* USER IMAGE BUTTON */}
          <div tabIndex={0} role="button" className="avatar cursor-pointer">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-2">
              <Image
                src={user?.photoURL}
                alt="User"
                width={40}
                height={40}
              />
            </div>
          </div>

  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li className="font-semibold text-accent">
        <Link href="/addVehicle">Add Vehicle</Link>
      </li>
     <li className="font-semibold text-accent">
        <Link href="/manageVehicles">Manage Vehicles</Link>
      </li>
  </ul>
</div>
          )}
        </div>

        {user ? (
          <Link href={"/login"}>
            <button onClick={handleSignOut} className="btn btn-primary">
              {" "}
              <FiLogOut></FiLogOut>Sign Out
            </button>
          </Link>
        ) : (
          <div className="flex flex-col md:flex-row gap-1">
            <Link className="btn btn-primary" href={"/login"}>
              {" "}
              Login
            </Link>
            <Link
              className="ml-3 bg-linear-to-r from-orange-500 to-orange-300 hover:text-xl font-semibold text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              href={"/register"}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
