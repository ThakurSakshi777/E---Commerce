import React, { useState } from 'react'
import "./cartCard.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

function CartCard({name , price , image , id}) {
  let [ CheckEmpty , setCheckEmpty ] = useState()
  let dispatch= useDispatch()
  return (
    <div className='cartcard'>
        <div className="left-card">
            <img src={image} alt="" />
            <div className="name-price">
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
        <div className="right-card">
            <button onClick={()=>{
              dispatch(RemoveItem(id))
              alert("Product Remove Successfully...")
            }}>Remove<RiDeleteBin6Line /></button>
        </div>

    </div>
  )
}

export default CartCard