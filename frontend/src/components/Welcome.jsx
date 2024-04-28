import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      {user && user.role === 'admin' && (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back, <span className="text-amber-500">{user && user.name} as {user && user.role}</span></h1>
          </div>
          )}
      {user && user.role === 'user' && (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back, <span className="text-amber-600">{user && user.name}</span></h1>
            <p className="mt-2 text-lg text-gray-600">Start selling your products now!</p>
          </div>
          )}
      </div>
    </div>
  );
};

export default Welcome;