import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';


const Dashboard = () => {
    return (
        <>
            <div className='bg-black'>
                <Menubar></Menubar>
            </div>
            <div>
                    <Link to=''>My Orders</Link>
                    <Link to='addreview'>Add Review</Link>
                    <Link to='myprofile'>My Profile</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Dashboard;