import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className='container mx-auto'>

           <Header/>
          <Outlet></Outlet>
        </div>
    );
};

export default Main;