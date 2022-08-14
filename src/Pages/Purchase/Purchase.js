import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { CgArrowLeft } from 'react-icons/cg'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './Purchase.css'
import Loader from '../Loader/Loader';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { toast } from 'react-toastify';


const Purchase = () => {
    const { id } = useParams()
    const { data: purchaseProduct, isLoading, refetch } = useQuery('purchaseProduct', () => fetch(`https://fathomless-earth-48987.herokuapp.com/bikeParts/${id}`, {
        method: 'GET',
        headers:{
            auth: localStorage.getItem('Secret-Key')
        }
    }).then(res => res.json()))
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [user] = useAuthState(auth)
    if (isLoading) {
        return <Loader></Loader>
    }
    const { img, name, detail, minimumOrder, availableQuantity, price, orderQuantity } = purchaseProduct;

    const totalPrice = parseInt(price) * parseInt(minimumOrder)
    const backBtn = () => {
        navigate(-1)
    }
    const decreaseBtn = () => {
        const orderAmount = parseInt(minimumOrder)
        const newAmount = parseInt(orderQuantity)
        console.log(newAmount);
        if (orderAmount !== newAmount) {
            fetch(`https://fathomless-earth-48987.herokuapp.com/bikeParts/${id}`, {
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
            fetch(`https://fathomless-earth-48987.herokuapp.com/bikeParts/${id}`, {
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
    const handleOrder = () => {
        const userEmail = user?.email;
        const userName = user?.displayName;
        fetch('https://fathomless-earth-48987.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({img, name, detail, minimumOrder, price, orderQuantity, userName,userEmail, phone, address, totalPrice})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success('Order is successfully add to your dashboard')
            }else{
                toast.warn('Order is already set')
            }
        })
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
                    <p className='purchase-product-price'>Price: tk {price} /piece</p>
                </div>
                <div>
                    <div className='order-info'>
                        <input type="text" placeholder='Name'  value={user?.displayName}/> <br /><br />
                        <input type="email" placeholder='Email' value={user?.email}/> <br /><br />
                        <input type="text" placeholder='Phone' value={phone} onChange={(e) =>setPhone(e.target.value)} /> <br /><br />
                        <input type="text" placeholder='Address' value={address} onChange={(e) =>setAddress(e.target.value)}/> <br /><br />
                        <p className='total-price'>Total Price: tk {parseInt(price) * parseInt(minimumOrder)}</p>
                        {
                           error ? <button disabled className='order-btn' style={{background:"gray"}}>Add to cart</button> : <button className='order-btn' onClick={handleOrder}>Add to cart</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;