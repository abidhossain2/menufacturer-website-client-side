import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './CheckoutForm.css'

const CheckoutForm = ({booking}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [defect, setDefect] = useState('');
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    
    const {userName, price} = booking;
    useEffect(() => {
            fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
}, [price])
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName
                    },
                },
            },
        );
        if(confirmError){
            setPaymentError(confirmError?.message)
        }else{
            console.log(paymentIntent);
        }
        if (error) {
            setDefect(error.message)
        } else {
            console.log(paymentMethod);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='payment-form'>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='payment-button' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button> <br />
            {defect} {paymentError}
        </form>
    );
};

export default CheckoutForm;
