// components/Card.jsx
import React from "react";

const Card = ({ title, image }) => {
    return (
        <div className="flex flex-col items-start justify-between bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all cursor-pointer w-full  group">
            <h3 className="text-base font-semibold text-gray-900 mb-3">{title}</h3>
            <img
                src={image}
                alt={title}
                className="w-20 h-20 object-contain ml-auto transform transition-transform duration-300 group-hover:scale-125"
            />
        </div>
    );
};

export default Card;