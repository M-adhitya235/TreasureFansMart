import React from "react";
import NavbarSidebar from "../components/NavbarSidebar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <NavbarSidebar />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
