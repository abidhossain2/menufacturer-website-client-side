import React from 'react';
import './BikeParts.css'
import { useQuery } from 'react-query';
import BikePart from '../BikePart/BikePart';


const BikeParts = () => {
    const { data: bikePats, isLoading } = useQuery('bikeParts', () => fetch('http://localhost:5000/bikeParts').then(res => res.json()))
    if (isLoading) {
        return <p> Loading................</p>
    }
    return (
        <>
        <h2 className='product-heading'>Our Products</h2>
        <span className='line'><span className='divider'></span></span>
            <div className='all-product'>
                {
                    bikePats.map(bikePart => <BikePart
                    key={bikePart._id}
                    bikePart={bikePart}
                    ></BikePart>)
                }
            </div>
        </>
    );
};

export default BikeParts;