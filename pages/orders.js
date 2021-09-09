import { getSession, useSession } from 'next-auth/client';
import React from 'react';
import db from '../firebase';
import Header from '../src/components/Header';
import moment from 'moment'

const Orders = ({ orders }) => {
    const session = useSession();
    console.log(orders)
    return (
        <div>
            <Header />
            <main className='container mx-auto p-10'>
                <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Your orders</h1>
                {
                    session ? <h2>X orders</h2> :
                    <h2>Please sign in to see your orders</h2>
                }
            </main>
        </div>
    );
};

export default Orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const session = getSession(context)

    if (!session) {
        return{
            props: {},
        }
    }

    const stripeOrders = await db.collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            image: order.data().image,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: {
                await stripe.checkout.session.listLineItems(order.id, {
                    limit: 100
                }).data
            }
        }))
    );

    return {
        props: {
            orders
        }
    }
}