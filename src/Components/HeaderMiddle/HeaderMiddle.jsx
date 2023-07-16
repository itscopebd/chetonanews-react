import React from 'react';
import logo from "../../assets/images/logo.png";
import ads1 from "../../assets/images/ads/ads1.png"
const HeaderMiddle = () => {
    return (
        <div className='flex container mx-auto max-h-[200px] overflow-hidden my-10 gap-5 '>
            <div className='w-4/12'>
                <img src={logo} alt="" />
            </div>
            <div className='w-8/12'>
                <img className='object-object-fit-cover h-full w-full rounded-md ' src={ads1} alt="" />
            </div>

        </div>
    );
};

export default HeaderMiddle;