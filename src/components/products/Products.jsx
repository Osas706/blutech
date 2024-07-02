import React, { useContext } from 'react';
import './Products.css';
import products from '../../products.json'
import Product from '../product/Product';
import { ApiContext } from '../../context/apiContext';

const Products = () => {
  const {newProduct} = useContext(ApiContext);
  console.log(newProduct);
  return (
    <div className='products'>
      {
        newProduct === null ? 
        ( products.map((product, index) => (
          <Product key={index} product={product} />
        ))) : 
        ( newProduct.map((product, index) => (
          <Product key={index} product={product} />
        ))) 
      }


      {/* {
        products.map((product, index) => (
          <Product key={index} product={product} />
        ))
      } */}
    </div>
  )
}

export default Products
