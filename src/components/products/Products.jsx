import React from 'react';
import './Products.css';
import products from '../../products.json'
import Product from '../product/Product';

const Products = () => {
  return (
    <div className='products'>
      {
        products.map((product, index) => (
            <Product key={index} product={product} />
        ))
      }
    </div>
  )
}

export default Products
