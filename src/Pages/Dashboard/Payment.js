import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripeKey = loadStripe('pk_test_51L1ZYVAvOVS3LV3nfuYkhmbPVHnvnNh6hISU6tw5YmiAG23cHHLXEIpuPxEIasIX4UKxi2ppWbQILVz4mTdjBi4D00nJtSpS52');

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripeKey}>
                <PaymentForm />
            </Elements>
        </div>
    );
};

export default Payment;