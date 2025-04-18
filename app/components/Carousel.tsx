"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };




    return (
        <div className="w-auto max-w-2xl mx-auto">
            <Slider {...settings}>
                {["investmentgroup.png", "agri1.jpg", "health1.jpg", "realestate1.jpg", "manu1.jpg"].map((image, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img 
                            src={`/${image}`} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-64 md:h-80 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
