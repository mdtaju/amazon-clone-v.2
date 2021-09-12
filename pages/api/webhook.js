import { buffer } from 'micro';
import * as admin from "firebase-admin";
const serviceAccount = require('../../permisions.json')

const app = !admin.apps.length ?
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        }) : 
        admin.app();

// Establish connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
    return app.firestore()
    .collection('users').doc(session.metadata.email)
    .collection('orders')
    .doc(session.id).set({
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping / 100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
};

export default async (req, res) => {
    if(req.method === 'POST'){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];

        let event;
        // Verify that the event posted came from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
        } catch (err) {
            return res.status(400).send(`Webhook error: ${err.message}`) 
        }
        if(event.type === 'checkout.session.completed'){
            // first mistake is event.data.object
            const session = event.data.object;
            return fulfillOrder(session).then(() => res.status(200)).catch((err) => res.status(500).send(`webhook error: ${err.message}`))
        }
    }
};

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}