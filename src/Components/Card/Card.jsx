import React from 'react';

const Card = (props) => {

    const { title, image } = props.singleNews;


    return (
        <div>

          <a href="">
          <div className="card bg-base-100">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body px-2 py-3">
                    <h2 className="card-title">{title}</h2>

                </div>
            </div>
          </a>

        </div>
    );
};

export default Card;