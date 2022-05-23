import React from 'react';
import './Loader.css'
import { GiShipWheel } from 'react-icons/gi'

const Loader = () => {
    return (
        <div className='spinner-section'>
            <div className='spinner-container'>
                <GiShipWheel className='spinner'></GiShipWheel>
            </div>
        </div>
    );
};

export default Loader;