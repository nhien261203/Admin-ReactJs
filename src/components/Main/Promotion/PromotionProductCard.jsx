// components/PromotionProductCard.jsx
import React from 'react';

const PromotionProductCard = ({
    image,
    name,
    price,
    originalPrice,
    discountPercent,
    statusText,
    statusColor = 'bg-yellow-100 text-yellow-800',
}) => {
    return (
        <div className="xl:w-[100%] bg-white rounded-lg shadow-md border p-3 flex flex-col gap-2">
            <img
                src={image}
                alt={name}
                className="h-[120px] w-full object-contain rounded-md"
            />
       
            <h3 className="text-sm font-medium line-clamp-2 text-gray-800">{name}</h3>
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

            {statusText && (
                <div className={`rounded-md text-xs py-1 px-2 font-semibold ${statusColor}`}>
                    🔥 {statusText}
                </div>
            )}
            <button className="bg-blue-500 text-white text-sm rounded-md py-1 mt-auto hover:bg-blue-600 transition-all">
                Mua ngay
            </button>
        </div>
    );
};

export default PromotionProductCard;