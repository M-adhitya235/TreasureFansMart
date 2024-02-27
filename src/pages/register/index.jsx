import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const RegisterForm = () => {
  return (
    <>
    <Navbar />
    <div className="flex" style={{ marginTop: "20px" }}>
      <div className="hidden md:inline-block flex-1 bg-no-repeat bg-cover bg-[url('src/assets/buketuang.jpg')]"></div>
      <div className="flex-1 flex flex-col justify-center bg-white">
        <div className="w-10/12 p-16 bg-gray-100 mx-auto border shadow-xl border-gray-200 rounded-lg shadow h-auto">
          <h1 className="font-inter font-bold text-center text-3xl lg:text-5xl text-black mb-8">
            Register
          </h1>
          <form>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nama
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                    fillRule="evenodd"
                    d="M10 0c2.42 0 4.404 1.936 4.404 4.328 0 2.394-1.984 4.33-4.404 4.33-2.42 0-4.404-1.936-4.404-4.33C5.596 1.936 7.58 0 10 0zm0 11.013c1.338 0 2.427-1.075 2.427-2.385C12.427 7.297 11.338 6.22 10 6.22c-1.338 0-2.427 1.076-2.427 2.388 0 1.31 1.089 2.385 2.427 2.385zM3.6 20h12.8c.99 0 1.8-.8 1.8-1.79V15c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v3.21c0 .99.81 1.79 1.8 1.79z"
                    clipRule="evenodd"
                />
              </svg>

              </div>
              <input
                type="nama"
                id="nama"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="Your Name"
              />
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="Email Address"
              />
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 mt-3 flexitems-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                placeholder="Password"
              />
            </div>
            <Link to="/login">
              <button
                type="submit"
                className="text-white bg-red-600 w-full text-center mt-10 place-content-center hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Masuk
              </button>
            </Link>
          </form>
          <div className="flex justify-center ">
            <p className="mt-2 text-center space-x-2.5">
              Sudah memiliki akun?
              <Link to="/login" className="ml-2 italic hover:text-blue-400">
                Sign In
              </Link>
            </p>
          </div>
        </div>   
      </div>
    </div>
    <div style={{ height: "100px" }}></div>
    <Footer />
    </>
  );
};


export default RegisterForm;
