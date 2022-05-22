import React from 'react';
import './FeedBack.css'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const FeedBack = () => {
    return (
        <>
            <div className="feedback-section">
                <h2 className='feedback-heading'>Feedback</h2>
                <span className='line'><span className='divider'></span></span>
                <div className="feedback-container">
                    <div className='single-feedback'>
                        <img className='feedback-img' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600" alt="" />
                        <div>
                            <h4 className='text-center mt-2'>Jack Sam</h4>
                            <p className='text-center'>Ratings: 5</p>
                            <div>
                                <p><FaQuoteLeft></FaQuoteLeft></p>
                            </div>
                            <div>
                                <p>Very excellent product. I am very happy to take products from them</p>
                            </div>
                            <div>
                                <p className='text-end'><FaQuoteRight></FaQuoteRight></p>
                            </div>
                        </div>
                    </div>
                    <div className='single-feedback'>
                    <img className='feedback-img' src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600" alt="" />
                        <div>
                            <h4 className='text-center'>Daniel Sams</h4>
                            <p className='text-center'>Ratings: 4.5</p>
                            <div>
                                <p><FaQuoteLeft></FaQuoteLeft></p>
                            </div>
                            <div>
                                <p>I don't want to make them small with thanks. Just Awesome. Well organized</p>
                            </div>
                            <div>
                                <p className='text-end'><FaQuoteRight></FaQuoteRight></p>
                            </div>
                        </div>
                    </div>
                    <div className='single-feedback'>
                    <img className='feedback-img' src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600" alt="" />
                        <div>
                            <h4 className='text-center'>Justin Tom</h4>
                            <p className='text-center'>Ratings: 4.9</p>
                            <div>
                                <p><FaQuoteLeft></FaQuoteLeft></p>
                            </div>
                            <div>
                                <p>High quality product. Lasts a long time. To be honest, comfortable to use. </p>
                            </div>
                            <div>
                                <p className='text-end'><FaQuoteRight></FaQuoteRight></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedBack;