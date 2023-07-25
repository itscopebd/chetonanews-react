import React from 'react';
import Marquee from "react-fast-marquee";
const BrekingNews = () => {
    return (
        <div className='container mx-auto bg-red-500 flex'>
            <span className='bg-red-500 text-white flex items-center rounded-r-lg text-sm w-28 py-2 justify-center'>নতুন খবর:</span>
            <Marquee gradient={true} pauseOnHover={true} className='flex justify-between gap-10'>
                <div className='mx-3 text-white'>
                    <h3>শিম চাষে সফল ইউসুফ আলী</h3>
                </div>
                <div className='mx-3 text-white text-md'>
                    <h3>সুপ্রিম কোর্টের আইনজীবী শামীম সরদারকে সম্মাননা স্মারক প্রদান</h3>
                </div>
                <div className='mx-3 text-white'>
                    <h3>চাটমোহরে প্রতিদিন প্রায় অর্ধকোটি টাকার গরু বেচাকেনা</h3>
                </div>
                <div className='mx-3 text-white'>
                    <h3>১ টি গাভি থেকে ২৪২ গরুর মালিক হয়েছেন পাবনার আলেপ</h3>
                </div>
                <div className='mx-3 text-white'>
                    <h3>পাবনায় ২০০ প্রবীণকে নিয়ে পদ্মাপাড়ে বনভোজন</h3>
                </div>
                <div className='mx-3 text-white'>
                    <h3>ভালোবেসে আট শতাধিক ভক্তের শরীরে আর্জেন্টিনার পতাকা এঁকেছে হাসমত</h3>
                </div>
                <div className='mx-3 text-white'>
                    <h3>সাঁথিয়ায় হাটে যাওয়ার পথে ট্রাকচাপায় দুই কৃষক নিহত</h3>
                </div>
                <div className='mx-3 text-white'>
                    <h3>জ্বালানি নিরাপত্তায় আশার আলো রূপপুর</h3>
                </div>
                <div className='mx-3 text-white'>
                    <h3>পাবনায় আলো ছড়াচ্ছে পথপাঠাগার</h3>
                </div>


            </Marquee>
        </div>
    );
};

export default BrekingNews;