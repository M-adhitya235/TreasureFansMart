import React from "react";

const CardComponent = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default CardComponent;