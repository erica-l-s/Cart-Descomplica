import React, { useContext} from 'react'
import { BsFillCartXFill } from 'react-icons/bs'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import './CartItem.css'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'

const CartItem = ({ data }) => {
    const { cartItems, setCartItems} = useContext(AppContext)
    const { thumbnail, title, price, quantity } = data

    const incrementItem = () => {
        const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === data.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(updatedItems);
    };
    
    const decrementItem = () => {
        if (data.quantity === 1) {
        const updatedItems = cartItems.filter((cartItem) => cartItem.id !== data.id);
        setCartItems(updatedItems);
        } else {
        const updatedItems = cartItems.map((cartItem) =>
            cartItem.id === data.id ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem
        );
        setCartItems(updatedItems);
        }
    };

      const removeItem = () => {
        const updatedItems = cartItems.filter((cartItem) => cartItem.id !== data.id);
        setCartItems(updatedItems);
    };

     return (
        <section className='cart-item'>
         
            <img src={thumbnail}
                alt='imagem produto'
                className='cart-item-image'></img>

            <div className='cart-item-content'>
                <h3 className='cart-item-title'>{title}</h3>
                <div className='cart-item-quanty'>
                    <button className={`button__quanty-item`} onClick={decrementItem} disabled={quantity <= 1}><CiCircleMinus /></button>
                    <span className='cart-item-number'>{quantity}</span>
                    <button className='button__quanty-item' onClick={incrementItem}><CiCirclePlus /></button>
                </div>

                <h3 className='cart-item-price'>{formatCurrency(price * quantity, 'BRL')}</h3>

                <button
                    type='button'
                    className='button__remove-item'
                    onClick={removeItem}
                >
                    <BsFillCartXFill />
                </button>

            </div>

        </section>
    )
}

export default CartItem