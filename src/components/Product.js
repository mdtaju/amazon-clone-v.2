import React, { useState } from 'react';
import Image from 'next/image';
import {StarIcon} from "@heroicons/react/solid"
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 3;

const Product = ({ product }) => {
    const dispatch = useDispatch()
    let itemsFromRedux = useSelector(selectItems);
    const {id, title, image, description, price, category} = product;
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5)

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            image,
            description,
            price,
            category,
            quantity: 1
        }
        let products = []
        products.push(product)
        dispatch(addToBasket(product))
        // if(sessionStorage.getItem('basketItems') && itemsFromRedux){
        //     let getProducts = JSON.parse(sessionStorage.getItem('basketItems'));
        //     const findItem = getProducts.find(item => item.id === id)
        //     const findItemFromRedux = itemsFromRedux.find(item => item.id === id)

        //     if(findItem && findItemFromRedux){
        //         let updateItem = getProducts.findIndex(item => item.id === id)
        //         getProducts[updateItem].quantity = getProducts[updateItem].quantity + 1
        //         sessionStorage.setItem('basketItems', JSON.stringify(getProducts))

        //         let updateItemForRedux = itemsFromRedux.findIndex(item => item.id === id)
        //         itemsFromRedux[updateItemForRedux].quantity = itemsFromRedux[updateItemForRedux].quantity + 1
        //         dispatch(addToBasket(itemsFromRedux))
        //     } else {
        //         getProducts.push(product)
        //         sessionStorage.setItem('basketItems', JSON.stringify(getProducts))
        //         const setItemToRedux = [...itemsFromRedux]
        //         setItemToRedux.push(product)
        //         dispatch(addToBasket(setItemToRedux))
        //     }
        // } else {
        //     sessionStorage.setItem('basketItems', JSON.stringify(products))
        //     dispatch(addToBasket(product))
        // }
    }
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image} width={200} height={200} objectFit='contain' alt='Amazon-Product'/>
            <h3 className='my-3 text-lg'>{title}</h3>

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
            {
                hasPrime && <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src="https://links.papareact.com/fdw" alt="Prime" />
                    <p className='text-xs text-gray-500'>FREE Next day delivery</p>
                </div>
            }
            <button onClick={() => addItemToBasket()} className='button mt-auto'>Add to Basket</button>
        </div>
    );
};

export default Product;