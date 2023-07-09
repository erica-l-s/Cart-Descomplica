import React from 'react'
import {BsFillCartXFill} from 'react-icons/bs'
import './CartItem.css'

function CartItem() {
  return (
   <section className='cart-item'>
    <img src='' 
    alt='imagem produto'
    className='cart-item-image'></img>

    <div className='cart-item-content'>
        <h3 className='cart-item-title'>Titulo do produto</h3>
        <h3 className='cart-item-price'>Prço</h3>

        <button type='button' className='button__remove-item'>
            <BsFillCartXFill/>
        </button>

    </div>

   </section>
  )
}

export default CartItem