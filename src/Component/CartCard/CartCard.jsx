import React, { useState } from 'react'
import "./cartCard.css"
import { RiDeleteBin6Line } from "react-icons/ri";

function CartCard() {
  let [ CheckEmpty , setCheckEmpty ] = useState()
  return (
    <div className='cartcard'>
        <div className="left-card">
            <img src="" alt="" />
            <div className="name-price">
                <span>Summsung</span>
                <span>Rs 1500</span>
            </div>
        </div>
        <div className="right-card">
            <button>Remove<RiDeleteBin6Line /></button>
        </div>

    </div>
  )
}

export default CartCard