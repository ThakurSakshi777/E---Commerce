import React from 'react'
import './Product.css'


function Product({name ,image ,price}) {
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="product-details">
         <span className='name'>{name}</span>
         <span className="price">{price}</span>
         <button>Add +</button>
      </div>
    </div>
  )
}

export default Product