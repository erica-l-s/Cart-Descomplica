import React, { useContext } from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import './CartButton.css'
import AppContext from '../../context/AppContext'

export default function CartButton() {
  const {cartItems,isCartVisible, setIsCartVisible} = useContext(AppContext)
  return (
    <button 
    type='button' 
    className='cart__button'
    onClick={()=> setIsCartVisible(!isCartVisible)}
    >
        <HiOutlineShoppingCart/>
        {cartItems.length > 0 && <span className='cart-status'>{cartItems.length}</span>}
        
    </button>
  )
}
