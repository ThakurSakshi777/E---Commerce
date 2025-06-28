import React, { useState } from 'react'
import { FaShopify } from "react-icons/fa6";
import { category } from '../../Category'
import "./Shop.css"
import { dummydata } from '../../dummydata'
import Product from '../../Product/Product'

function Shop() {
    let [Cate , setCate] = useState(dummydata)

    function filterProduct (category) {
       if (category === "All"){
        setCate(dummydata)
       } else {
           const updatedata = dummydata.filter((item)=>(item.category===category))
        setCate(updatedata)
       }
      }
  return (
    <div className='shop'>
        <h1 className='shop_heding'>
            <span>Shop  <FaShopify /> </span> 
        </h1>
      <div className="category-section">
        {category.map((item)=>(
        <div className="category-card" onClick={()=>{
          filterProduct(item.name)
        }}>
          <img src={item.image} alt="" />
          <span>{item.name}</span>
        </div>
      ))}
      </div>
      <div className="product-section">
        {Cate.map((item)=>(
          <Product name={item.name} price ={item.price} image={item.image} id ={item.id}/>
        ))}
      </div>

    </div>
  )
}

export default Shop