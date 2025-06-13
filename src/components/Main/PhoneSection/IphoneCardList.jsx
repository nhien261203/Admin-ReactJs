// components/IphoneCardList.jsx
import React from 'react';
import IphoneCard from './IphoneCard';
import { useDragScroll } from '../../../hooks/useDragScroll';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const IphoneCardList = ({ products }) => {
    const { containerRef, eventHandlers } = useDragScroll();

    const scroll = (direction) => {
        const container = containerRef.current;
        if (!container) return;

        const scrollAmount = 300;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className="relative group/slider"
        >
            {/* Nút trái */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all opacity-0 group-hover/slider:opacity-100"
            >
                <FaChevronLeft />
            </button>

            {/* Nút phải */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all opacity-0 group-hover/slider:opacity-100"
            >
                <FaChevronRight />
            </button>

            {/* Danh sách card */}
            <div
                ref={containerRef}
                {...eventHandlers}
                className="flex gap-4 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none px-1"
            >
                {products.map((product) => (
                    <div key={product.id} className="min-w-[250px] max-w-[250px]">
                        <IphoneCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IphoneCardList;
