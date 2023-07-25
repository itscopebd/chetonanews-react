import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../Card/Card';
const Politics = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("Data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const filterData = data.filter(news => {
        if (news.party[0] == "আওয়ামী লীগের") {
            return news;
        }
    })
    const filterBnp = data.filter(news => {
        if (news.party[0] == "বিএনপি") {
            return news;
        }
    })
    console.log(data)
    return (
        <div>
            <h4 className='text-3xl border-b-2 border-green-500 my-5'> রাজনীতি</h4>
            <Tabs>
                <TabList>
                    <Tab>আওয়ামী লীগ</Tab>
                    <Tab>বিএনপি</Tab>
                    <Tab>গণ অধিকার পরিষদ</Tab>
                    <Tab>জামায়াত</Tab>
                    <Tab>জাতীয় পার্টি</Tab>
                    <Tab>অনন্য</Tab>

                </TabList>

                <TabPanel>
                    <div className=' my-10'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            {
                                filterData.map(singleNews => <Card singleNews={singleNews} key={singleNews.id}></Card>)
                            }
                        </div>
                        <div className='flex justify-center w-full mt-7 '>
                            <button className='bg-green-400 btn btn-md border-none hover:bg-transparent hover:border-green-400 hover:border-2 hover:text-red-500'> আরও সংবাদ </button>
                        </div>
                    </div>


                </TabPanel>
                <TabPanel>
                    <div className=' my-10'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
                            {
                                filterBnp.map(singleNews => <Card singleNews={singleNews} key={singleNews.id}></Card>)
                            }

                        </div>
                        <div className='flex justify-center w-full mt-7'>
                            <button className='bg-green-400 btn btn-md border-none hover:bg-transparent hover:border-green-400 hover:border-2 hover:text-red-500'> আরও সংবাদ </button>
                        </div>
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Politics;