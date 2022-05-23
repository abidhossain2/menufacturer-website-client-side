import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { CgArrowLeft } from 'react-icons/cg'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './Purchase.css'


const Purchase = () => {
    const { id } = useParams()
    const { data: purchaseProduct, isLoading, refetch } = useQuery('purchaseProduct', () => fetch(`http://localhost:5000/bikeParts/${id}`).then(res => res.json()))
    const navigate = useNavigate();
    const [error, setError] = useState('')
    
    if (isLoading) {
        return <p> Loading..................</p>;
    }
    const { img, name, detail, minimumOrder, availableQuantity, price, orderQuantity } = purchaseProduct;
    const backBtn = () => {
        navigate(-1)
    }
    const decreaseBtn = () => {
        const orderAmount = parseInt(minimumOrder)
        const newAmount = parseInt(orderQuantity)
        console.log(newAmount);
        if (orderAmount !== newAmount) {
            fetch(`http://localhost:5000/bikeParts/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ orderAmount })
            })
                .then(res => res.json())
                .then(data => {
                    setError(null)
                    console.log(data);
                    refetch();
                })
        } else {
           setError(<p className='decrease-error'>Can not less than minimum order</p>)      
        }

    }
    const increaseBtn = () => {
        const orderAmount = parseInt(minimumOrder)
        const availableAmount = parseInt(availableQuantity);
        if ((minimumOrder < availableAmount) && (minimumOrder !== availableAmount)) {
            fetch(`http://localhost:5000/bikeParts/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ orderAmount })
            })
                .then(res => res.json())
                .then(data => {
                    setError(null)
                    console.log(data);
                    refetch();
                })
        } else {
            setError(<p className='increase-error'>Can not greater than available quantity</p>)
        }
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
                            <div><FaMinus className='amount-icon' onClick={decreaseBtn}></FaMinus></div>
                            <div> <input className='text-center order-input' value={minimumOrder} /></div>
                            <div><FaPlus className='amount-icon' onClick={increaseBtn}></FaPlus></div>
                            <div className='order-piece'>Pieces</div>
                        </div>
                    </div>
                        {error}
                    <p className='purchase-product-quantity'>Available Quantity: {availableQuantity} Pieces</p>
                    <p className='purchase-product-price'>Price: {price}</p>
                </div>
                <div>
                    <div className='order-info'>
                        <input type="text" placeholder='Name' /> <br /><br />
                        <input type="email" placeholder='Email' /> <br /><br />
                        <input type="text" placeholder='Phone' /> <br /><br />
                        <input type="text" placeholder='Address' /> <br /><br />
                        <p className='total-price'>Total Price: tk {parseInt(price) * parseInt(minimumOrder)}</p>
                        {
                           error ? <button disabled className='order-btn' style={{background:"gray"}}>Place Order</button> : <button className='order-btn'>Place Order</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;