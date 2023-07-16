import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrekingNews from '../BrekingNews/BrekingNews';

const Header = () => {
    const navBar = <>
        <li><Link className='text-white'>জাতীয়</Link></li>
        <li><Link className='text-white'>রাজনীতি</Link></li>
        <li><Link className='text-white'>অর্থনীতি</Link></li>
        <li><Link className='text-white'>আন্তর্জাতিক</Link></li>
        <li><Link className='text-white'>খেলা</Link></li>
        <li><Link className='text-white'>বিনোদন</Link></li>
        <li><Link className='text-white'>শিক্ষাঙ্গন</Link></li>
    </>
    return (
        <div>
            <BrekingNews></BrekingNews>
            <div className=" bg-green-600">
                <div className="navbar px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navBar}
                            </ul>
                        </div>
                        <NavLink to="/" className="btn btn-ghost normal-case text-xl pl-0">daisyUI</NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navBar}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;