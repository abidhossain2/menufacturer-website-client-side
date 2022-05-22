import React from 'react';
import './BikePart.css'

const BikePart = ({bikePart}) => {
    const {name, img, detail, price, minimumOrder, availableQuantity} = bikePart;
    return (
        <div className='single-product'>
            <img className='product-img' src={img} alt="" />
            <h4 className='name'>Name: {name}</h4>
            <p className='detail'>{detail}</p>
            <p className='min-order'>Minimum Order: {minimumOrder} Pieces</p>
            <p className='quantity'>Available Quantity: {availableQuantity} Pieces</p>
            <p className='price'>Price: tk {price}</p>
            <button className='purchase-btn'>Purchase</button>
        </div>
    );
};

export default BikePart;