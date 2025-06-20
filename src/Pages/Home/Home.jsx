import React from 'react'
import './Home.css'
import bg  from '../../assets/bg0.gif'
import {category} from '../../Category'

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
     
    </div>
  )
}

export default Home