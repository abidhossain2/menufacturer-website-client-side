import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';

const PaymentForm = () => {
    return (
        <div>
            <form>
                <PaymentElement />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default PaymentForm;