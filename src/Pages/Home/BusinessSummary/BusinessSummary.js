import React from 'react';
import './BusinessSummary.css'
import { AiOutlineFlag, AiOutlineFundProjectionScreen, AiOutlineHeart } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'

const BusinessSummary = () => {
    return (
        <>
            <div className='summary-section'>
                <h3 className='summary-heading'>Glimpse Of Our Company</h3>
                <span className='summary-line'><span className='summary-divider'></span></span>
                <div className='summary-container'>
                    <div>
                        <span><AiOutlineFlag className='summary-icon'></AiOutlineFlag></span> <br />
                        <span className='summary-no'>100+</span> <br />
                        <span className='break-line'></span>
                        <span className='summary-name'>Countries</span>
                    </div>
                    <div>
                        <span><AiOutlineFundProjectionScreen className='summary-icon'></AiOutlineFundProjectionScreen></span> <br />
                        <span className='summary-no'>1200+</span> <br />
                        <span className='break-line'></span>
                        <span className='summary-name'>Projects</span>
                    </div>
                    <div>
                        <span><IoIosPeople className='summary-icon'></IoIosPeople></span><br />
                        <span className='summary-no'>800+</span> <br />
                        <span className='break-line'></span>
                        <span className='summary-name'>Clients</span>
                    </div>
                    <div>
                        <span><AiOutlineHeart className='summary-icon'></AiOutlineHeart></span><br />
                        <span className='summary-no'>99%</span> <br />
                        <span className='break-line'></span>
                        <span className='summary-name'>Satisfaction</span>
                    </div>
                </div>
                <div className='summary-info'>
                    <div>
                        <h2 className='summary-info-heading'>If you have any question <br /> don't hasitate to contact us</h2>
                    </div>
                    <div>
                        <button className='quote-btn'>Request for quotes</button>
                        <button className='contact-btn'>Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessSummary;