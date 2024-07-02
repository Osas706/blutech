import React from 'react';
import Navbar from './components/navbar/Navbar';
import Middle from './components/middle/Middle';
import Products from './components/products/Products';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Middle />
      <Products />
    </div>
  )
}

export default App
