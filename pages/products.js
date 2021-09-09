import React from 'react';
import Header from '../src/components/Header';

const products = () => {
    
    return (
        <div>
            <Header userSearch={userSearch}/>
            <h1>products page</h1>
        </div>
    );
};

export default products;

export async function getServerSideProps(context){
    const getProducts = await fetch('https://fakestoreapi.com/products').then(res => res.json())
  
    return {
      props: {
        getProducts
      }
    }
  }