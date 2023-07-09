import React ,{useContext, useState} from 'react'
import {BiSearchAlt} from "react-icons/bi"
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'



export default function SearchBar() {

  const [searchValue, setSearchValue] = useState("")
  
  const {setProducts,setLoading} = useContext(AppContext)

  const handleSearch = async (event) =>{
   event.preventDefault()
   setLoading(true)

   const products = await fetchProducts(searchValue)

   setSearchValue('')
   setProducts(products)
   setLoading(false)
  

  }


  return (
    <form className='search-bar' onSubmit={handleSearch}>
    
    <input
        type='search'
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({target})=>setSearchValue(target.value)}
        required>

    </input>
   
    <button type="submit" className="search__button">
    <BiSearchAlt/>
    </button>
</form>
  )
}
