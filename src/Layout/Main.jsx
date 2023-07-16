import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import HeaderMiddle from '../Components/HeaderMiddle/HeaderMiddle';


const Main = () => {
    return (

        <>
       
            <div className='container mx-auto'>
            <HeaderMiddle></HeaderMiddle>
            <Header />

                <Outlet></Outlet>
            </div>
        </>

    );
};

export default Main;