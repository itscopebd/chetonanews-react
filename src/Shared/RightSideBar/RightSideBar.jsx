import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import LatestNews from '../LatestNews/LatestNews';

const RightSideBar = () => {
    const [tabIndex, setTabIndex] = useState(0);


    return (
        <div>
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-between py-3 my-3 gap-5 items-center">
                 
                       <Tab className='bg-gray-600 text-white block w-6/12 text-center py-2 cursor-pointer rounded-md' >সর্বশেষ</Tab>
                       
                        <Tab className="bg-gray-600 w-6/12 text-center text-white py-2 cursor-pointer rounded-md">সর্বাধিক পঠিত</Tab>
                    </TabList>
                    <TabPanel><LatestNews/></TabPanel>
                    <TabPanel>ererere</TabPanel>
                </Tabs>
        </div>
    );
};

export default RightSideBar;