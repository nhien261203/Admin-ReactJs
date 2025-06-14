import React from 'react';
import Slider from 'react-slick';
import IphoneCard from './IphoneCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArrowLeft = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 hidden group-hover/slider:block"
    >
        <FaChevronLeft />
    </button>
);

const ArrowRight = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 hidden group-hover/slider:block"
    >
        <FaChevronRight />
    </button>
);

const IphoneCardList = ({ products }) => {
    const settings = {
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 5, // Default for desktop >=1280px
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        responsive: [
            {
                breakpoint: 1280, // < 1280px → iPad Pro
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1000, // < 1280px → iPad Pro
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // < 1024px → iPad Mini
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // < 768px → Mobile
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

        ],
    };

    return (
        <div className="relative group/slider overflow-hidden">
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="px-1">
                        <IphoneCard {...product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default IphoneCardList;
