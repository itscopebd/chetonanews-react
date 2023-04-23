import React, { useEffect, useState } from 'react';
import AwamiLeague from '../../Components/AwamiLeague/AwamiLeague';
import Bnp from '../../Components/Bnp/Bnp';

const HomePage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("Data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data)
    return (
        <div className='w-12 md:w-8/12'>
            <div>
            <AwamiLeague data={data}></AwamiLeague>
            </div>
            <div>
            <Bnp data={data}></Bnp>
            </div>
            <div>

            </div>
        </div>
    );
};

export default HomePage;