"use client";

import { AuthContext } from "@/components/authProvider/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { use} from "react";
import toast from "react-hot-toast";

const page = () => {
  const { createUser, setUser, googleSignIn, profileUpdate } =
    use(AuthContext);
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const terms = e.target.terms.checked;
    // console.log(email, password, name, photo, terms);

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    if (!terms) {
      toast.error("Please accept our terms and conditions!");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error(
        "Password is Incorrect!Please provide one uppercase and one lowercase letter.Password should be at least 6 characters long."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        toast.success("Registration Successful!");
        e.target.reset();
        profileUpdate(profile)
          .then(() => {
            // console.log("Profile Updated!");
            setUser(profile);
          })
          .catch((err) => {
            console.log(err);
          });
        router.push("/");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero container mx-auto bg-blue-50 text-black min-h-screen pb-4">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-accent text-center font-bold mt-5">
            Please Signup!
          </h1>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input dark:bg-accent"
                  placeholder="Name"
                  required
                />
                <label className="label">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input dark:bg-accent"
                  placeholder="Photo URL"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input dark:bg-accent"
                  placeholder="Email"
                  required
                />
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input dark:bg-accent"
                    placeholder="Password"
                    required
                  />
                </div>

                <label className="label">
                  <input
                    type="checkbox"
                    name="terms"
                    className="checkbox dark:bg-accent"
                  />
                  Please accept our Terms and Conditions!{" "}
                </label>

                <button className="btn mt-4 btn-primary rounded-md text-white">
                  Sign Up
                </button>
              </fieldset>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="font-bold text-orange-400 underline hover:text-xl"
              >
                Login
              </Link>{" "}
            </p>

            <div className="text-center">
              <span className="w-12 h-1">----------</span>
              <span> or </span>
              <span>----------</span>
            </div>

            {/* Google */}
            <button
              onClick={handleGoogleSignUp}
              className="btn bg-orange-100 hover:bg-orange-300 text-black border-[#e5e5e5] hover:btn-primary"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Signup with Google
            </button>
          </div>
        </div>
      </div>
      {/* <Toaster></Toaster> */}
    </div>
  );
};

export default page;
