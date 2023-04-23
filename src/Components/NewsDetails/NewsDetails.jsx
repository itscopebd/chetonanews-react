import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {
const detailsId=useParams();

const loadData=useLoaderData()

const [details,setDetails]=useState({});

useEffect(()=>{
    const value=loadData.find(data=>data.id==detailsId.id);
    setDetails(value)
},[])

const {id,author,description,image,title,party,category}=details;

console.log(details)
    return (
        <div className='container mx-auto'>

            <div className='w-8/12'>
            <div className="card bg-base-100">
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body px-2 py-3">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
            </div>
            <div className='w-4/12'>

            </div>
            
        </div>
    );
};

export default NewsDetails;