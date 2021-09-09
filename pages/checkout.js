import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../src/components/CheckoutProduct';
import Header from '../src/components/Header';
import { selectItems, selectTotal } from '../src/slices/basketSlice';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/client';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_public_key)
const Checkout = () => {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const [session] = useSession()

    const createCheckoutStripe = async () => {
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-checkout-session',{
            items,
            email: session.user.email,
        })
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })
        if (result.error) alert(result.error.message)
    }
    // const Subtotal = items.
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex container mx-auto'>
                {/* left side */}
                <div className='flex-grow m-5'>
                    <Image 
                        src='https://links.papareact.com/ikj'
                        alt='Add Banner'
                        width={1020}
                        height={250}
                        objectFit='contain'
                    />
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='pb-4 border-b text-3xl'>
                            {
                                items.length > 0 ? 'Your Shopping Basket' : 'No product added yet'
                            }
                        </h1>
                        {
                        items.map((item, i) => (
                            <CheckoutProduct item={item} key={i}/>
                        ))
                    }
                    </div>
                    <hr />
                </div>



                {/* right side */}
                {
                    items.length > 0 &&
                    <div className='flex flex-col bg-white p-5'>
                        <h1 className='whitespace-nowrap'>Subtotal ({items.length} Items):{" "}
                        <span>
                        <Currency
                            quantity={total}
                            currency="GBP"
                        />
                        </span>
                        </h1>
                        <button onClick={createCheckoutStripe} role='link' disabled={!session ? true : false} className={`mt-2 button w-full ${!session && 'from-gray-500 to-gray-300 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                            {session ? 'Proceed to checkout' : 'Sign in to checkout'}
                        </button>
                    </div>
                }
            </main>
        </div>
    );
};

export default Checkout;