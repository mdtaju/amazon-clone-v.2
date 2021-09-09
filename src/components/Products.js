import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
            {products.slice(0, 4).map((product, i) => (
                <Product product={product} key={i} />
            ))}
            <img className='md:col-span-full' src='https://links.papareact.com/dyz' alt='Add-banner'/>
            <div className='md:col-span-2'>
                {products.slice(4, 5).map((product) => (
                    <Product product={product} key={product.key} />
                ))}
            </div>
            {products.slice(5, products.length).map((product) => (
                <Product product={product} key={product.key} />
            ))}
        </div>
    );
};

export default Products;