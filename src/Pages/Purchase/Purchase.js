import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { CgArrowLeft } from 'react-icons/cg'
import {FaPlus, FaMinus} from 'react-icons/fa'
import './Purchase.css'

const Purchase = () => {
    const { id } = useParams()
    const { data: purchaseProduct, isLoading } = useQuery('purchaseProduct', () => fetch(`http://localhost:5000/bikeParts/${id}`).then(res => res.json()))
    const navigate = useNavigate();
    
    if (isLoading) {
        return <p> Loading..................</p>;
    }
    const { img, name, detail, minimumOrder, availableQuantity, price } = purchaseProduct;
    const backBtn = () => {
        navigate(-1)
    }
   
    return (
        <>
            <button onClick={backBtn} className="back-btn"><CgArrowLeft></CgArrowLeft></button>
            <div className='purchase-section'>
                <div className='text-center purchase-container'>
                    <img className='purchase-img' src={img} alt="" />
                    <p className='purchase-product-name'>{name}</p>
                    <p className='purchase-product-detail'>{detail}</p>
                    <div className='order-amount-container'>
                        <div>
                            <p className='purchase-product-order'>Minimum Order: </p>
                        </div>
                        <div className='d-flex'>
                           <div><FaMinus className='amount-icon'></FaMinus></div>
                           <div> <input className='text-center order-input' value={minimumOrder} /></div>
                           <div><FaPlus className='amount-icon'></FaPlus></div>
                           <div className='order-piece'>Pieces</div>
                        </div>
                    </div>
                    <p className='purchase-product-quantity'>Available Quantity: {availableQuantity} Pieces</p>
                    <p className='purchase-product-price'>Price: {price}</p>
                </div>
                <div>
                    <div className='order-info'>
                        <input type="text" placeholder='Name' /> <br /><br />
                        <input type="email" placeholder='Email' /> <br /><br />
                        <input type="text" placeholder='Phone' /> <br /><br />
                        <input type="text" placeholder='Address' /> <br /><br />
                        <button className='order-btn'>Place Order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;