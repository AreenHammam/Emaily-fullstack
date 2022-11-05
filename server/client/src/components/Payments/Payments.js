import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from "react-redux";
import {updateToken} from "../../slices/authSlice";

const Payments = () => {
    const dispatch = useDispatch();
    return (
        <StripeCheckout
            name='Emaily'
            description='$5 for 5 email credits'
            amount={500} // cents
            token={(token) => {
                console.log('StripeCheckout', {token});
                dispatch(updateToken(token));
            }}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">Add credits</button>

        </StripeCheckout>
    );
}

export default Payments;
