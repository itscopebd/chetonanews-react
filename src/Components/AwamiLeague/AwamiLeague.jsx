import React from 'react';
import Card from '../Card/Card';

const AwamiLeague = ({ data }) => {
    const filterData = data.filter(news => {
        if (news.party[0] == "আওয়ামী লীগের") {
            return news;
        }
    })

    return (
        <div>
            <h3 className='py-2 border-b-2 border-green-400 text-black font-bold my-3'>আওয়ামী লীগের</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    filterData.map(singleNews => <Card singleNews={singleNews} key={singleNews.id}></Card>)
                }
            </div>
        </div>
    );
};

export default AwamiLeague;