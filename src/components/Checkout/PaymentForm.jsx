import React from 'react';
// import { Typography, Button, Divider } from '@material-ui/core';
// import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const PaymentForm = ({cart}) => {
    return (
        <div>
            <Review cart={cart}/>
        </div>
    )
}

export default PaymentForm
