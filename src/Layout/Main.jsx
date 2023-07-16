import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import HeaderMiddle from '../Components/HeaderMiddle/HeaderMiddle';


const Main = () => {
    return (

        <>
        <HeaderMiddle></HeaderMiddle>
            <Header />
            <div className='container mx-auto'>


                <Outlet></Outlet>
            </div>
        </>

    );
};

export default Main;