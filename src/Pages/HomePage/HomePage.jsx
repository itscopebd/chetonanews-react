import React, { useEffect, useState } from 'react';
import AwamiLeague from '../../Components/AwamiLeague/AwamiLeague';
import Bnp from '../../Components/Bnp/Bnp';
import RightSideBar from '../../Shared/RightSideBar/RightSideBar';
import Banner from '../../Components/Banner/Banner';
import Politics from '../../Components/Politics/Politics';
import HomePageCard from '../../Components/HomePageCard/HomePageCard';

const HomePage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("Data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data)
    return (
        <>
            <Banner></Banner>
            <div className='flex gap-8'>
                <div className='w-9/12'>

                    {/* <AwamiLeague data={data}></AwamiLeague>
                    <Bnp data={data}></Bnp> */}
                    <Politics></Politics>

                    <HomePageCard></HomePageCard>
                </div>

                <div className='w-3/12'>
                    <RightSideBar></RightSideBar>
                </div>

            </div>
        </>
    );
};

export default HomePage;