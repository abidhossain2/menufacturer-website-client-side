import React from 'react';
import './Footer.css'
import { GiCarWheel } from 'react-icons/gi'
import {  AiOutlineTwitter,AiOutlineGooglePlus } from 'react-icons/ai'
import { ImEnvelop } from 'react-icons/im'
import { RiLinkedinFill } from 'react-icons/ri'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaPhoneVolume,FaCalendarMinus,FaTelegramPlane, FaFacebookF,FaPinterestP } from 'react-icons/fa'
import { BiMessageRounded } from 'react-icons/bi'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
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
                    <p className='text-white'>Over 20 years experience and knowledge <br /> international standards, technologicaly changes our systems.</p>
                    <div className='d-flex'>
                        <span><FaPhoneVolume className='single-footer-icon'></FaPhoneVolume></span>
                        <span className='text-white contact-no'>01546789218</span>
                    </div>
                    <div className='d-flex'>
                        <span><ImEnvelop className='single-footer-icon'></ImEnvelop></span>
                        <span className='text-white contact-email'>delta@gmail.com</span>
                    </div>
                </div>
                <div className='single-footer'>
                    <h3 className='text-white mt-2 ms-4 second-footer-heading'>Company</h3>
                    <ul className='list'>
                        <li className='text-white list-item'><MdOutlineKeyboardArrowRight className='list-icon'></MdOutlineKeyboardArrowRight>About Us</li>
                        <li className='text-white list-item'><MdOutlineKeyboardArrowRight className='list-icon'></MdOutlineKeyboardArrowRight>News Media</li>
                        <li className='text-white list-item'><MdOutlineKeyboardArrowRight className='list-icon'></MdOutlineKeyboardArrowRight>Meet Our Team</li>
                        <li className='text-white list-item'><MdOutlineKeyboardArrowRight className='list-icon'></MdOutlineKeyboardArrowRight>Contact Us</li>
                        <li className='text-white list-item'><MdOutlineKeyboardArrowRight className='list-icon'></MdOutlineKeyboardArrowRight>Career</li>
                    </ul>
                </div>
                <div className='single-footer'>
                    <h3 className='text-white mt-2 ms-4 second-footer-heading'>Latest Posts</h3>
                    <div  className='latest-post'>
                        <p className='text-white question'>What is the planning <br /> process needs?</p>
                        <div className='d-flex '>
                            <span><FaCalendarMinus className='latest-post-icon'></FaCalendarMinus></span>
                            <span className='text-white date'>January 18, 2022</span>
                        </div>
                    </div> <hr className='horizontal-line' />
                    <div className='latest-post'>
                        <p className='text-white question'>Commercial and projects <br /> around the world.</p>
                        <div className='d-flex'>
                            <span><BiMessageRounded className='latest-post-icon'></BiMessageRounded></span>
                            <span className='text-white date'>May 4, 2022</span>
                        </div>
                    </div>
                </div>
                <div className='single-footer'>
                <h3 className='text-white mt-2 ms-4 second-footer-heading'>Subscribe Us</h3>
                <p className='text-white footer-end ms-4'>Sign up today for tips and latest news <br /> and exclusive special offers.</p>
                <div className='ms-4 input-field-container'>
                    <input type="email" placeholder='email address' className='input-field' />
                    <span><FaTelegramPlane className='telegram-icon'></FaTelegramPlane></span>
                </div>
                <div className='mt-5 d-flex'>
                    <div>
                        <p className='text-white ms-4 social-link'>Follow Us:</p>
                    </div>
                    <div>
                        <span><FaFacebookF className='social-icon'></FaFacebookF></span>
                        <span><AiOutlineTwitter className='social-icon'></AiOutlineTwitter></span>
                        <span><AiOutlineGooglePlus className='social-icon'></AiOutlineGooglePlus></span>
                        <span><RiLinkedinFill className='social-icon'></RiLinkedinFill></span>
                        <span><FaPinterestP className='social-icon'></FaPinterestP></span>
                    </div>
                </div>
                </div>
            </div>
            <div className='copyright-section'>
                    <p className='text-white text-center'>Copyright &copy; {year} All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;