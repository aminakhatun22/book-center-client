import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();

    const { item_name, price } = booking;


    return (
        <div>
            <h3 className="text-3xl">Payment for {item_name}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;