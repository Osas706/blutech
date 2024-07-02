import React, { useContext } from 'react';
import './Middle.css';
import { ApiContext } from '../../context/apiContext';

const Middle = () => {
  const {error, loading} = useContext(ApiContext);
  return (
    <div className='middle'>
       {error && <span className='error'>{error}</span>}
       {loading === true ? <span>Loading...</span> : ''}
       <h1>Department List</h1>

       <div className="info-title">
         <div></div>

         <span>S/N</span>
         <span>Image</span>
         <span>SKU</span>
         <span>Name</span>
         <span>Title</span>
         <span>Description</span>
         <span>Brand</span>
         <span>cost</span>
         <span>Qty</span>
         <span>Size</span>
       </div>
    </div>
  )
}



export default Middle
