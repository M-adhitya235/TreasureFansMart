// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//       <div>
//         <main className="p-6">{children}</main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
