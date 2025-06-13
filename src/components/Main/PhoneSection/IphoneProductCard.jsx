// src/components/IphoneProductCard.jsx
import React from "react";

const IphoneProductCard = ({ image, name, capacity, price, originalPrice }) => {
    return (
        <div className="bg-white rounded-2xl p-4 flex flex-col items-center w-full max-w-xs transition-shadow duration-300 shadow-none hover:shadow-xl">
            <img src={image} alt={name} className="w-44 h-44 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-center mb-2">{name}</h3>
            <p className="text-sm text-gray-600 mb-2">Dung lượng: {capacity}</p>
            <div className="text-center mt-auto">
                <p className="text-red-500 line-through text-sm">{originalPrice}</p>
                <p className="text-xl font-bold text-black">{price}</p>
            </div>
        </div>
    );
};

export default IphoneProductCard;
