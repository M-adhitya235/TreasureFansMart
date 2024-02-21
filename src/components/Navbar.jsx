import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ navlinks }) {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: isNavbarFixed ? "#FAF8F8" : "#FAF8F8", 
    padding: "1.5rem",
    position: isNavbarFixed ? "fixed" : "absolute",
    width: "100%",
    zIndex: 1000, 
    boxShadow: isNavbarFixed ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none", 
    transition: "background-color 0.3s ease", 
  };

  return (
    <nav style={navbarStyle} className="flex justify-between items-center">
      {/* Logo
      <div className="flex items-center space-x-2">
        <img
          src="src/assets/Rumap.idlogo.png" 
          alt="Logo"
          className="h-12 w-auto" 
        />
      </div> */}

      <ul className="flex space-x-10 text-black ml-auto font-roboto font-semibold text-sm">
        {navlinks.map((link) => (
          <li key={link.title}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="ml-10">
        <button
          onClick={handleLogin}
          className="text-white px-6 py-3 rounded-md transition-all text-sm font-roboto font-semibold"
          style={{
            backgroundColor: "#3F72AF",
            borderRadius: "10px",
          }}
        >
          Daftar/Masuk
        </button>
      </div>
    </nav>
  );
}

export default Navbar;