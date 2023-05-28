import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RightSideBar from '../../Shared/RightSideBar/RightSideBar';

const NewsDetails = () => {
    const detailsId = useParams();

    const loadData = useLoaderData()

    const [details, setDetails] = useState({});

    useEffect(() => {
        const value = loadData.find(data => data.id == detailsId.id);
        setDetails(value)
    }, [])

    const { id, author, description, image, title, party, category } = details;

    console.log(details)
    return (
        <div className='container mx-auto flex'>

            <div className='w-8/12'>
                <div className="card bg-base-100">
                    <h2 className="my-3 font-bold text-3xl">{title}</h2>
                    <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                    <div className="card-body px-2 py-3">

                        <p>{description}</p>

                    </div>
                </div>
            </div>
            <div className='w-4/12'>
                <RightSideBar></RightSideBar>
            </div>

        </div>
    );
};

export default NewsDetails;