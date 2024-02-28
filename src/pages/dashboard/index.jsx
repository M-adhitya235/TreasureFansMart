import React from "react";
import Navbar from "../../components/Navbar";
import CardComponent from "../../components/CardCompo";

function Dashboard() {
  return (
    <div className="min-h-screen bg-white-200">
      <Navbar isDashboard={true} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl text-gray-800 font-bold mb-4 ml-4">Today</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card List */}
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
