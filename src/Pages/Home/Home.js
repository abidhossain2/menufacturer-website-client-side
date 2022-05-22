import React from 'react';
import Menubar from '../Menubar/Menubar';
import BikeParts from './BikeParts/BikeParts';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import FeedBack from './FeedBack/FeedBack';
import './Home.css'
import WorkProcess from './WorkProcess/WorkProcess';

const Home = () => {
    return (
        <>
            <div className='banner'>
                <Menubar></Menubar>
                <h2 className='quote'>The Best <br />Bike<br /> Manufacturer</h2>
            </div>
            <BikeParts></BikeParts>
            <BusinessSummary></BusinessSummary>
            <WorkProcess></WorkProcess>
            <FeedBack></FeedBack>
        </>
    );
};

export default Home;


