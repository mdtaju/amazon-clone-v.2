import Image from 'next/image';
import React, { useState } from 'react';
import {StarIcon} from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 3;
const CheckoutProduct = ({item}) => {
    const dispatch = useDispatch()
    const { id, image, title, description, price, quantity } = item

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    let options = [];
    for (let i = 1; i < Math.max(quantity + 1, 51); i++) {
        options.push(<option className='pr-1' value={i}> Qty: {i}</option>)
    }
    const SelectQuantity = (Quantity) => {
        console.log(Quantity)
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image 
                src={image}
                alt='Product-Image'
                width={200}
                height={200}
                objectFit='contain'
            />
            <div className='col-span-3 mx-5'>
                <h1 className='text-md font-bold'>{title}</h1>
                <div className='flex'>
                {
                    Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-600'/>
                    ))
                }
                </div>
                <p className='text-sm line-clamp-2 my-2'>{description}</p>
                <div className='mb-5'>
                    <Currency
                        quantity={price}
                        currency="GBP"
                    />
                </div>
            </div>
            <div className='mx-5 my-auto'>
                <select className='p-2 mb-3 w-full bg-gray-300 outline-none rounded-sm' value={quantity} onChange={(e) => SelectQuantity(e.target.value)}>
                    {options}
                </select>
                <button onClick={removeItemFromBasket} className="button w-full">Remove</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;