import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import HeaderMiddle from '../Components/HeaderMiddle/HeaderMiddle';
import HeaderTop from '../Components/HeaderTop/HeaderTop';


const Main = () => {
    return (

        <>
       
            <div className='container mx-auto'>
                <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <Header />

                <Outlet></Outlet>
            </div>
        </>

    );
};

export default Main;