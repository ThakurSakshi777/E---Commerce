import React from 'react'
import './Home.css'
import bg  from '../../assets/bg0.gif'
import {category} from '../../Category'
import Product from "../../Product/Product"
import { dummydata } from '../../dummydata'

function Home() {
  return (
    <div className='home'>
     <div className="hero-bg">
      <img src={bg} alt="" />
     </div>
      <div className="category-section">
        {category.slice(0,5).map((item)=>(
        <div className="category-card">
          <img src={item.image} alt="" />
          <span>{item.name}</span>
        </div>
      ))}
      </div>
     <h1 className='heading'> Trending Product</h1>
      <div className="product-section">
        {dummydata.map((item)=>(
          <Product name={item.name} price ={item.price} image={item.image}/>
        ))}
      </div>

    </div>
  )
}

export default Home