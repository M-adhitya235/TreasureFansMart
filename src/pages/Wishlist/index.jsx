import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CardComponent from "../../components/CardCompo";
import Footer from "../../components/Footer";

function Wishlist() {
  return (
    <div className="min-h-screen bg-white-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl text-gray-800 font-bold mb-4 ml-4 relative">
          <span className="absolute text-black px-2 py-1" style={{ right: "-2.5rem", top: "0.3rem", fontSize: "1.0rem",
              boxShadow: "0 0 0 2px black"}}>
            Move ALL to Cart
          </span>
          Wishlist
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card List */}
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" style={{ marginTop: "2rem", marginbottom: "3rem" }} />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" style={{ marginTop: "2rem", marginbottom: "3rem" }} />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" style={{ marginTop: "2rem", marginbottom: "3rem" }} />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl text-gray-800 font-bold mb-4 ml-4 relative">
      <Link to="/" 
            className="absolute text-black px-2 py-1"
            style={{right: "-2.5rem", top: "0.3rem", fontSize: "1.0rem", boxShadow: "0 0 0 2px black", textDecoration: "none", cursor: "pointer"}}>
            See ALL
          </Link>
          Just For You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card List */}
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" style={{ marginTop: "2rem", marginbottom: "3rem" }} />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" style={{ marginTop: "2rem", marginbottom: "3rem" }} />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" style={{ marginTop: "2rem", marginbottom: "3rem" }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;