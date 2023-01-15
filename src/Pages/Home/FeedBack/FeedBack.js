import React from 'react';
import './FeedBack.css'
import { useQuery } from 'react-query';
import Review from './Review';

const FeedBack = () => {
    const {data:reviews, isLoading} = useQuery('reviews', () => fetch('https://products-my73.onrender.com/reviews').then(res => res.json()))
    if(isLoading){
        return <p>Loading................</p>
    }
    return (
        <>
            <div className="feedback-section">
                <h3 className='feedback-heading'>Customer Feedback</h3>
                <span className='line'><span className='divider'></span></span>
                <div className="feedback-container">
                    {
                        reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </>
    );
};

export default FeedBack;


