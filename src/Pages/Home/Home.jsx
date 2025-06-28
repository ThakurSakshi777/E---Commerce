import React, { useState } from 'react'
import './Home.css'
import bg  from '../../assets/bg0.gif'
import {category} from '../../Category'
import Product from "../../Product/Product"
import { dummydata } from '../../dummydata'

function Home() {
  let [Cate , setCate] = useState(dummydata)

  function filterProduct (category) {
    const updatedata = dummydata.filter((item)=>(item.category===category))
    setCate(updatedata)
  }

  return (
    <div className='home'>
     <div className="hero-bg">
      <img src={bg} alt="" />
     </div>
      <div className="category-section">
        {category.slice(0,5).map((item)=>(
        <div className="category-card" onClick={()=>{
          filterProduct(item.name)
        }}>
          <img src={item.image} alt="" />
          <span>{item.name}</span>
        </div>
      ))}
      </div>
     <h1 className='heading'> Trending Product</h1>
      <div className="product-section">
        {Cate.slice(0,7).map((item)=>(
          <Product name={item.name} price ={item.price} image={item.image} id = {item.id}/>
        ))}
      </div>

    </div>
  )
}

export default Home