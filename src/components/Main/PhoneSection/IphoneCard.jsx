import React from 'react';
import { FaStar } from 'react-icons/fa'; // Icon sao từ react-icons

const IphoneCard = ({
    image,
    name,
    price,
    originalPrice,
    discountPercent,
    specs, // ví dụ: "128GB"
    sold = 0,
    rating = 0,
}) => {
    return (
        <div className="xl:w-[100%] group h-[350px] bg-white rounded-lg shadow-md border p-3 flex flex-col gap-2 hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={name}
                className="h-[200px] w-full object-contain rounded-md transition-transform duration-300 transform group-hover:-translate-y-2"
            />

            <h3 className="text-sm font-medium line-clamp-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {name}
            </h3>

            <div className="text-xs text-gray-600 font-medium">{specs}</div>

            <div className="flex flex-col text-sm">
                <span className="text-red-600 font-bold">{price}₫</span>
                <div className="flex items-center gap-2">
                    <span className="line-through text-gray-400 text-xs">{originalPrice}₫</span>
                    {discountPercent && (
                        <span className="text-xs text-red-500 font-semibold">
                            -{discountPercent}%
                        </span>
                    )}
                </div>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
                <span>{sold} đã bán</span>
                <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar size={14} />
                    <span>{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default IphoneCard;
