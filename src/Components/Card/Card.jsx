import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const { id, title, image } = props.singleNews;


    return (
        <div>

            <Link to={`/newsdetails/${id}`}>



                <div className="custom__hover card bg-red-500 shadow-sm rounded-none hover:shadow-none image-full">
                <figure className='w-full'><img className='w-full' src={image} alt="Shoes" /></figure>
                    <div className="card-body flex items-end">
                    <h2 className="card-title text-base my-3 h-full">{title}</h2>
                        
                    </div>
                </div>


                {/* <div className="card bg-base-100 shadow-sm custom__hover">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body px-2 py-3">
                        <h2 className="card-title text-base my-3">{title}</h2>

                    </div>
                </div> */}



            </Link>

        </div>
    );
};

export default Card;