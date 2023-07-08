import React ,{useState} from 'react'
import {BiSearchAlt} from "react-icons/bi"
import './SearchBar.css'



export default function SearchBar() {

  const [searchValue, setSearchValue] = useState("")


  return (
    <form className='search-bar'>
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
