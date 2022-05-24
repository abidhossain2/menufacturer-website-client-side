import React from 'react';
import './BikeParts.css'
import { useQuery } from 'react-query';
import BikePart from '../BikePart/BikePart';
import Loader from '../../Loader/Loader';


const BikeParts = () => {
    const { data: bikeParts, isLoading } = useQuery('bikeParts', () => fetch('http://localhost:5000/bikeParts').then(res => res.json()))
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <>
        <h3 className='product-heading'>Our Products</h3>
        <span className='line'><span className='divider'></span></span>
            <div className='all-product'>
                {
                    bikeParts.map(bikePart => <BikePart
                    key={bikePart._id}
                    bikePart={bikePart}
                    ></BikePart>)
                }
            </div>
            
        </>
    );
};

export default BikeParts;