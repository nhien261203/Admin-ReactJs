import React from "react";

const Card = ({ title, image }) => {
    return (
        <div className="flex flex-col items-start justify-between bg-white rounded-xl shadow-md 
                        p-3 md:p-4 lg:p-5 
                        hover:shadow-lg transition-all cursor-pointer w-full group">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 
                        mb-2 md:mb-3">
                {title}
            </h3>
            <img
                src={image}
                alt={title}
                className="w-15 h-16 md:w-18 md:h-18 object-contain ml-auto 
                        transform transition-transform duration-300 group-hover:scale-110"
            />
        </div>
    );
};

export default Card;
