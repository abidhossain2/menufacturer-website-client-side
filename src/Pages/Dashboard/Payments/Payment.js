import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
    const { id } = useParams()
    const [booking, setBooking] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooking(data)
            })
    }, [id])

    return (
        <>
            <div className='order-detail'>
                <p className='order-name'>Product Name: {booking?.name}</p>
                <p className='order-amount'>Quantity: {booking?.orderQuantity} pieces</p>
                <p className='order-price'>PLease Pay: tk{booking?.totalPrice}</p>
            </div>
            <div className='payment-form-container'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}/>
                </Elements>
            </div>
        </>

    );
};

export default Payment;