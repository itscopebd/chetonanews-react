import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const { id, title, image } = props.singleNews;


    return (
        <div>

          <Link to={`/newsdetails/${id}`}>
          <div className="card bg-base-100">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body px-2 py-3">
                    <h2 className="card-title">{title}</h2>

                </div>
            </div>
          </Link>

        </div>
    );
};

export default Card;