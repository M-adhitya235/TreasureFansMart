import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="block w-10/12 p-16 bg-gray-100 mx-auto border shadow-xl border-gray-200 rounded-lg shadow">
      <h1 className="font-bold text-center text-4xl lg:text-6xl text-black mb-8">
        Register
      </h1>
      <form>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Nama Lengkap
        </label>
        <div className="relative">
          <input
            type="text"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nama Lengkap"
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Username
        </label>
        <div className="relative">
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Username"
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
        <Link to={'/'}>
          <button
            type="submit"
            className="text-white bg-blue-600 w-full text-center mt-10 place-content-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Register
          </button>
        </Link>
      </form>
      <div className="flex justify-center ">
        <p className="mt-2 text-center space-x-2.5">
          Sudah Punya akun ?
          <Link to="/login" className="ml-2 italic hover:text-blue-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;