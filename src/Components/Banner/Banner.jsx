import React from 'react';
import featuredImage from "../../assets/images/featured.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        loop: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <div>
            <div class="grid grid-cols-4 gap-4">

                <div class="col-span-2 row-span-6 rounded-md relative">
                    <Slider {...settings}>
                        <div>
                            <img className='w-full h-full rounded-md' src={featuredImage} alt="" />
                            <div className='bg-gray-400 text-center flex items-center justify-center bg-opacity-50 h-24 absolute bottom-0 w-full'>
                                <h4 className='text-4xl text-black'>Title Here </h4>
                            </div>
                        </div>
                        <div>
                            <img className='w-full h-full rounded-md' src={featuredImage} alt="" />
                            <div className='bg-gray-400 text-center flex items-center justify-center bg-opacity-50 h-24 absolute bottom-0 w-full'>
                                <h4 className='text-4xl text-black'>Title Here </h4>
                            </div>
                        </div>
                        <div>
                            <img className='w-full h-full rounded-md' src={featuredImage} alt="" />
                            <div className='bg-gray-400 text-center flex items-center justify-center bg-opacity-50 h-24 absolute bottom-0 w-full'>
                                <h4 className='text-4xl text-black'>Title Here </h4>
                            </div>
                        </div>
                        <div>
                            <img className='w-full h-full rounded-md' src={featuredImage} alt="" />
                            <div className='bg-gray-400 text-center flex items-center justify-center bg-opacity-50 h-24 absolute bottom-0 w-full'>
                                <h4 className='text-4xl text-black'>Title Here </h4>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div class="col-span-1 row-span-3 rounded-md relative">
                    <img className='w-full rounded-md' src={featuredImage} alt="" />
                    <div className='bg-gray-400 text-center flex items-center justify-center bg-opacity-50 h-24 absolute bottom-0 w-full'>
                        <h4 className='text-4xl text-black'>Title Here </h4>
                    </div>
                </div>
                <div class="col-span-1 row-span-3 rounded-md relative">
                    <img className='w-full rounded-md' src={featuredImage} alt="" />
                    <div className='bg-gray-400 text-center flex items-center justify-center bg-opacity-50 h-24 absolute bottom-0 w-full'>
                        <h4 className='text-4xl text-black'>Title Here </h4>
                    </div>
                </div>
                <div class="col-span-1 row-span-3 rounded-md relative">
                    <img className='w-full rounded-md' src={featuredImage} alt="" />
                    <div className='bg-gray-400 text-center flex items-center justify-center bg-opacity-50 h-24 absolute bottom-0 w-full'>
                        <h4 className='text-4xl text-black'>Title Here </h4>
                    </div>
                </div>
                <div class="col-span-1 row-span-3 rounded-md relative">
                    <img className='w-full rounded-md' src={featuredImage} alt="" />
                    <div className='bg-gray-400 text-center flex items-center justify-center bg-opacity-50 h-24 absolute bottom-0 w-full'>
                        <h4 className='text-4xl text-black'>Title Here </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;