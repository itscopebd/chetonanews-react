import React, { useEffect, useState } from 'react';
import AwamiLeague from '../../Components/AwamiLeague/AwamiLeague';

const HomePage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("data/Data.json")
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
                
            </div>
        </div>
    );
};

export default HomePage;