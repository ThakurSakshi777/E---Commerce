import React from 'react'
import './Nav.css'
import { FaShopify } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";

function Nav() {
  return (
    <div className='nav'>
        <div className="top-nav">
          <div className="logo">
            <span>V-Shop</span>
             <FaShopify />
          </div>

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
           <li>Home</li>
           <li>Shop</li>
           <li>Cart</li>
           <li>Contact</li>
        </div>

    </div>
  )
}

export default Nav