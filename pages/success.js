import React from 'react';
import Header from '../src/components/Header'
import {
    CheckCircleIcon
} from "@heroicons/react/solid";
import { useRouter } from 'next/router';

const Success = () => {
    const router = useRouter();
    return (
        <div className='bg-gray-100 h-screen'>
            <Header />
            <main className='container mx-auto'>
                <div className='flex flex-col p-10 bg-white'>
                    <div className='flex items-center space-x-2 mb-5'>
                        <CheckCircleIcon className='text-green-500 h-10'/>
                        <h1 className='text-3xl'>Your order has been confirmed</h1>
                    </div>
                    <p>Thank you for shopping with us. Well send a confirmation once your items has been shipping. If you like to check the status of your order(s) please press the link below</p>
                    <button onClick={() => router.push('/orders')} className='button mt-8'>Go to my orders</button>
                </div>
            </main>
        </div>
    );
};

export default Success;