import React from 'react';
import './Footer.css'
import {GiCarWheel} from 'react-icons/gi'
import {FaPhoneVolume} from 'react-icons/fa'
import {ImEnvelop} from 'react-icons/im'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-container'>
                <div className='single-footer'>
                    <span className='first-heading-name'>Delta</span> <br />
                    <div className='d-flex align-items-center'>
                        <div className='d-flex align-items-center'>
                            <span className='second-heading-name'>Tw</span>
                            <span><GiCarWheel className='wheel'></GiCarWheel></span>
                        </div>
                        <span className='third-heading-name ms-2'>Wheeler Industry</span>
                    </div>
                    <p className='text-white'>Over 20 years experience and knowledge international standards, technologicaly changes our systems.</p>
                    <div className='d-flex'>
                        <span><FaPhoneVolume className='single-footer-icon'></FaPhoneVolume></span>
                        <span className='text-white'>01546789218</span>
                    </div>
                    <div className='d-flex'>
                        <span><ImEnvelop className='single-footer-icon'></ImEnvelop></span>
                        <span className='text-white'>delta@gmail.com</span>
                    </div>
                </div>
                <div  className='single-footer'></div>
                <div  className='single-footer'></div>
                <div  className='single-footer'></div>
            </div>
        </div>
    );
};

export default Footer;