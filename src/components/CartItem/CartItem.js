import React, { useContext } from 'react'
import { BsFillCartXFill } from 'react-icons/bs'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import './CartItem.css'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'

function CartItem({ data }) {
    const { cartItems, setCartItems } = useContext(AppContext)
    const { id, thumbnail, title, price } = data

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id !== id)
        setCartItems(updatedItems)
    }

    return (
        <section className='cart-item'>
            <img src={thumbnail}
                alt='imagem produto'
                className='cart-item-image'></img>

            <div className='cart-item-content'>
                <h3 className='cart-item-title'>{title}</h3>
                <div className='cart-item-quanty'>
                    <button className='button__quanty-item'><CiCircleMinus /></button>
                    <span className='cart-item-number'>1</span>
                    <button className='button__quanty-item'><CiCirclePlus /></button>
                </div>


                <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>

                <button
                    type='button'
                    className='button__remove-item'
                    onClick={handleRemoveItem}
                >
                    <BsFillCartXFill />
                </button>

            </div>

        </section>
    )
}

export default CartItem