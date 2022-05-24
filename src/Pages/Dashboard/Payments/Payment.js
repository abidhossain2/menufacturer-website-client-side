import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { useParams } from 'react-router-dom';

const stripeKey = loadStripe('pk_test_51L1ZYVAvOVS3LV3nfuYkhmbPVHnvnNh6hISU6tw5YmiAG23cHHLXEIpuPxEIasIX4UKxi2ppWbQILVz4mTdjBi4D00nJtSpS52');

const Payment = () => {
    const { id } = useParams()
    const [payment, setPayment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPayment(data)
            })
    }, [id])
    return (
        <>
            <div className='order-detail'>
                <p className='order-name'>Product Name: {payment?.name}</p>
                <p className='order-amount'>Quantity: {payment?.orderQuantity} pieces</p>
                <p className='order-price'>PLease Pay: tk{payment?.totalPrice}</p>
            </div>
            <div className='payment-form-container'>
                <Elements stripe={stripeKey}>
                    <PaymentForm payment={payment}/>
                </Elements>
            </div>
        </>

    );
};

export default Payment;