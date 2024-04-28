import React from "react";
import { useSelector } from "react-redux";

const WelcomeSeller = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back, <span className="text-amber-600">{user && user.name}</span></h1>
          <p className="mt-2 text-lg text-gray-600">Start selling your products now!</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSeller;
