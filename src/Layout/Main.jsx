import React from 'react';

import HomePage from './../Pages/HomePage/HomePage';
import Header from '../Components/Header/Header';


const Main = () => {
    return (
        <div className='container mx-auto'>

           <Header/>
            <HomePage></HomePage>
        </div>
    );
};

export default Main;