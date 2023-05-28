import React, { useEffect, useState } from 'react';
import AwamiLeague from '../../Components/AwamiLeague/AwamiLeague';
import Bnp from '../../Components/Bnp/Bnp';
import RightSideBar from '../../Shared/RightSideBar/RightSideBar';
import Banner from '../../Components/Banner/Banner';

const HomePage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("Data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data)
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='flex gap-5'>
                <div className='w-8/12'>

                    <AwamiLeague data={data}></AwamiLeague>
                    <Bnp data={data}></Bnp>


                </div>

                <div className='w-4/12'>
                    <RightSideBar></RightSideBar>
                </div>

            </div>
        </div>
    );
};

export default HomePage;