import React from 'react'
import './Nav.css'
import { FaShopify } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <div className="top-nav">
          <Link to = "/">
          <div className="logo">
            <span>V-Shop</span>
             <FaShopify />
          </div>
          </Link>

          <form className='serach-box'> 
            <input type="text" placeholder='Search Items...'/>
            <button><IoSearch /></button>
          </form>

          <div className="card-box">
            <span>0</span>
            <IoIosCart />
          </div>
        </div>
        
        <div className="bottom-nav">
          <Link to ="/"> <li>Home</li> </Link>
          <Link to = "/shop"> <li>Shop</li> </Link>
          <Link to = "/shop"> <li>Cart</li></Link>
           <Link to = "/contact"> <li>Contact</li> </Link>
        </div>

    </div>
  )
}

export default Nav