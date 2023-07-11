import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'
import propTypes from 'prop-types'

function Provider({children}) {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [isCartVisible, setIsCartVisible] = useState(false)

    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems'))
        
        if (cartItemsData) {
            setCartItems(cartItemsData)
        }
    }, [])
    
    useEffect(() => {
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])
     
    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible, 
        setIsCartVisible,
    }

  return (
  <AppContext.Provider value={value}>
   {children}
  </AppContext.Provider>
   )
}

export default Provider

Provider.propTypes = {
    children:propTypes.any,

}.isRequired