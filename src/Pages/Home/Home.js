import React from 'react';
import Menubar from './Menubar';
import './Home.css'

const Home = () => {
    return (
        <div className='banner'>
            <Menubar></Menubar>
            <h2 className='quote'>The Best <br />Bike<br /> Manufacturer</h2>
        </div>
    );
};

export default Home;