//import { getStripePromise } from '@/lib/stripe';
import { Button } from './ui/button';
import { FormEvent } from 'react';
import getStripe from '@/lib/stripe';
import Stripe from 'stripe';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useRouter } from 'next/router';

export default function Checkout(props:any){

  const cartData = useSelector((state: RootState) => state.cartProductReducer.cartProducts );
  
  async function handleStripeCheckout () {
    try {
      const stripePublishableKey =
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      if (!stripePublishableKey) {
        console.error('Stripe publishable key is not defined');
        return;
      }
      
      const res = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
      });
      if (res.ok) {
        await res
          .json()
          .then((data) => {
            //console.log('api-res: ', res);

            console.log('api-jData: ', data.data);
            window.location.href = data.data;


          })
          .catch((error) => {
            console.log('res-error: ', error);
          });
      } else {
        console.error('Error-api-res:', res);
      }
    } catch (error) {
      console.error('Error-stripe-session:', error);
    }
  };


    return(
        <div className='flex justify-end'>
            <Button onClick={handleStripeCheckout} className='h-14 w-52 text-base font-bold'>Proceed To Checkout</Button>
        </div>
    )
}