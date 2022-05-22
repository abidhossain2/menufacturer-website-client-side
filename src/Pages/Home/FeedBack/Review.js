import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import './Review.css'

const Review = ({ review }) => {
    const { img, name, ratings, feedback } = review;
    return (
        <div className='single-feedback'>
            <img className='feedback-img' src={img} alt="" />
            <div>
                <h4 className='text-center mt-2'>{name}</h4>
                <p className='text-center fw-bold'>Ratings: {ratings}</p>
                <div>
                    <p><FaQuoteLeft></FaQuoteLeft></p>
                </div>
                <div>
                    <p>{feedback}</p>
                </div>
                <div>
                    <p className='text-end'><FaQuoteRight></FaQuoteRight></p>
                </div>
            </div>
        </div>
    );
};

export default Review;