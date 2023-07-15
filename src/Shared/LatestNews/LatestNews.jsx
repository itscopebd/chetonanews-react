import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        fetch("Data.json")
            .then(res => res.json())
            .then(data => setLatest(data))
    }, []);


    return (
        <>
            <ul>
                {
                    latest.map(latestNews => <li key={latestNews.id} className='py-2 border-b-2 border-green-400 hover:text-red-500'> <Link className='hover:text-green' to={`/newsdetails/${latestNews.id}`}>{latestNews.title}</Link> </li>)
                }

            </ul>
        </>
    );
};

export default LatestNews;