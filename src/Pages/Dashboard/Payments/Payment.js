import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
// import { useQuery } from 'react-query';
// import Loader from '../../Loader/Loader'

const stripePromise = loadStripe("pk_test_51L1ZYVAvOVS3LV3nfuYkhmbPVHnvnNh6hISU6tw5YmiAG23cHHLXEIpuPxEIasIX4UKxi2ppWbQILVz4mTdjBi4D00nJtSpS52");

const Payment = () => {
    const { id } = useParams()
    const [booking, setBooking] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooking(data)
            })
    }, [id])
    // const {data:booking, isLoading} = useQuery(['booking', id], () => fetch(`http://localhost:5000/orders/${id}`).then(res => res.json()))
    // if(isLoading){
    //     return <Loader></Loader>
    // }
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