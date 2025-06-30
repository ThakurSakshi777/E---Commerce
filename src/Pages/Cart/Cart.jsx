import React from 'react'
import"./Cart.css"
import CartCard from '../../Component/CartCard/CartCard'
import { useSelector} from 'react-redux'
import es from "../../assets/emptycart.png"
function Cart() {
  let items = useSelector (state => state)
  return (
    <div className='cart'>
      { items.cart.length<=0?<div className="empty-cart">
         <h1> Empty Cart</h1>
        <img src={es} alt="" />
      </div> : <CartCard/>}
      
    </div>
  )
}

export default Cart