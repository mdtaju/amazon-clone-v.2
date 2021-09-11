import { getSession, useSession } from 'next-auth/client';
import React from 'react';
import db from '../firebase';
import Header from '../src/components/Header';
import moment from 'moment'
import Order from '../src/components/Order';

const Orders = ({ userOrders }) => {
    const session = useSession();
    return (
        <div>
            <Header />
            <main className='container mx-auto p-10'>
                <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Your orders</h1>
                {
                    session ? <h2>X orders</h2> :
                    <h2>Please sign in to see your orders</h2>
                }
                <div>
                    {
                        userOrders?.map((order, id) => (
                            <Order key={id} order={order}/>
                        ))
                    }
                </div>
            </main>
        </div>
    );
};

export default Orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const session = await getSession(context);

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
    const userOrders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    );

    return {
        props: {
            userOrders
        }
    }
}