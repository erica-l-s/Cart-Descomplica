import React, { useContext } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'


  function Cart() {
  const {cartItems,isCartVisible} = useContext(AppContext)

 
  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
   
  return (
    <section className={`cart ${isCartVisible ? 'cart--active': ''}`}>
        <div className='cart-items'>
          {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)}
          
        </div>
        <div className='cart-resume'>{formatCurrency(getTotalPrice(),'BRL')}</div>
    </section>
    
  )
}

export default Cart