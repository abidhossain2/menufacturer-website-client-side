import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';
import './Dashboard.css'

const Dashboard = () => {

    return (
        <>
            <div className='bg-black'>
                <Menubar></Menubar>
            </div>
            <div className='nested-link-container'>
                    <NavLink to='/dashboard' className='nested-link'>My Orders</NavLink>
                    <NavLink to='addreview' className='nested-link'>Add Review</NavLink>
                    <NavLink to='myprofile' className='nested-link'>My Profile</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Dashboard;