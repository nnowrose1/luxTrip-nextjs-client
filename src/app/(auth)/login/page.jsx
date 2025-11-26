"use client";
import { AuthContext } from "@/components/authProvider/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { logInUser, setUser, googleSignIn } = use(AuthContext);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        router.push("/");
        e.target.reset();
      })
      .catch((error) => {
        // console.log("Log in error");
        toast.error(error.message);
      });
  };

  const handleGoogleLogIn = () => {
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
    <div className="hero container mx-auto bg-blue-50 text-primary min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="card bg-white p-8 w-full max-w-sm shrink-0 shadow-2xl text-black">
            <h1 className="text-3xl text-accent text-center font-bold">
              Login Now!
            </h1>

            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input border-orange-400 dark:bg-accent "
                    placeholder="Email"
                  />
                  <div className="relative">
                    <label className="label">Password</label>
                    <input
                      type={"password"}
                      name="password"
                      required
                      className="input border-orange-400 dark:bg-accent"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <button type="submit" className="link link-hover">
                      Forgot password?
                    </button>
                  </div>
                  <button className="btn mt-4 btn-primary rounded-md text-white">
                    Login
                  </button>
                </fieldset>
              </form>
              <p className="text-center">
                New to our website?{" "}
                <Link
                  href={"/register"}
                  className="font-bold text-orange-400 underline hover:text-xl"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
            <div className="text-center -mt-4">
              <span>----------</span>
              <span> or </span>
              <span>----------</span>
            </div>

            {/* Google */}
            <button
              onClick={handleGoogleLogIn}
              className="btn bg-orange-100 hover:bg-orange-300 text-black border-[#e5e5e5]"
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
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
