import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import slide2Desktop from '../../assets/hero/slide-2.png';
import slide2Mobile from '../../assets/hero/slide-2-mob.png';
import slide3Desktop from '../../assets/hero/slide-3.png';
import slide3Mobile from '../../assets/hero/slide-3-mob.png';

// Custom Arrow Buttons
const PrevArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white opacity-50 hover:opacity-100 p-2 rounded-full shadow cursor-pointer transition duration-300 z-10"
    >
        <FaArrowLeft className="text-black" />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white opacity-50 hover:opacity-100 p-2 rounded-full shadow cursor-pointer transition duration-300 z-10"
    >
        <FaArrowRight className="text-black" />
    </div>
);

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slides = [
        {
            desktop: slide2Desktop,
            mobile: slide2Mobile,
        },
        {
            desktop: slide3Desktop,
            mobile: slide3Mobile,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        pauseOnHover: false,
        cssEase: 'ease-in-out',
    };

    return (
        <div className="w-full overflow-hidden mb-24 relative">
            
            <Slider {...settings}>
                {slides.map((slide, index) => {
                    const imageSrc = isMobile ? slide.mobile : slide.desktop;
                    return (
                        <div key={index} className="outline-none focus:outline-none">
                            <img
                                src={imageSrc}
                                alt={`Slide ${index + 1}`}
                                className="w-[100%] h-[100%] object-cover"
                                draggable={false}
                                style={{ outline: 'none' }}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Hero;
