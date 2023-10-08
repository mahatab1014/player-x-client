import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "/images/logo-header.png";
import ContinueWithSocialAccount from "./ContinueWithSocialAccount";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProfider";
import Swal from "sweetalert2";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { userSignIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage("");

    try {
      await userSignIn(email, password);
      Swal.fire({
        icon: "success",
        title: "Your account has been signed in successfully",
        showConfirmButton: false,
        timer: 2500,
      }).then(() => {
        // Navigate to the desired location
        if (location?.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      });
    } catch (error) {
      setErrorMessage("Email or Password is incorrect!");
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section className="bg-gray-900">
      <div className="container flex justify-center py-10 px-6 mx-auto">
        <div data-aos="fade-in" className="w-full max-w-md">
          <form onSubmit={handleSignIn} className="">
            <div className="flex items-center justify-center mx-auto">
              <span className="text-2xl text-white">Player</span>
              <img className="w-auto h-7 sm:h-8" src={Logo} alt="" />
            </div>

            <div className="flex items-center justify-center mt-6">
              <Link
                to="/auth/signin"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                Sign in
              </Link>

              <Link
                to="/auth/signup"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
              >
                sign up
              </Link>
            </div>

            {errorMessage && (
              <div className="mt-8 bg-error p-2 text-black">
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
                required
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
                required
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
          <div>
            <ContinueWithSocialAccount />

            <div className="mt-6 text-center">
              <span className="text-sm">
                Don't have an account?
                <Link
                  className="hover:underline text-blue-500 ml-2"
                  to="/auth/signup"
                >
                  Create one
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
