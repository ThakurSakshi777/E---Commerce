import React from 'react'
import"./Cart.css"
import CartCard from '../../Component/CartCard/CartCard'
import { useSelector} from 'react-redux'
import es from "../../assets/emptycart.png"
function Cart() {
  let items = useSelector (state => state)
  let total = items.cart.reduce((a,b)=>a+b.price,0)
  return (
    <div className='cart'>
      { items.cart.length<=0?<div className="empty-cart">
         <h1> Empty Cart</h1>
        <img src={es} alt="" />
      </div> :
      <div className="cartSectiopn">
        {items.cart.map((item)=>(
          <CartCard name = {item.name} price = { item.price} image = {item.image} id = {item.id}/>
        ))}

        <div className="price-section">
          <span> Total product : {items.cart.length}</span>
          <span> Total price : { total}</span>
        </div>
      </div> 
      }
      
    </div>
  )
}

export default Cart