import React from 'react';
import Menubar from '../Menubar/Menubar';
import BikeParts from './BikeParts';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='banner'>
                <Menubar></Menubar>
                <h2 className='quote'>The Best <br />Bike<br /> Manufacturer</h2>
            </div>
            <BikeParts></BikeParts>
        </>
    );
};

export default Home;


