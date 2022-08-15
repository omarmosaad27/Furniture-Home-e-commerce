import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts,refresh } from '../redux/productsSlice';
import { BiSearchAlt } from 'react-icons/bi';
const SearchForm = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    dispatch(
      filterProducts(searchTerm)
    )
  }, [searchTerm])
  if (searchTerm === "") {
    dispatch(
      refresh()
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Search Product' onChange={(e) => setSearchTerm(e.target.value)} />
      <BiSearchAlt className='search-icon'/>
    </form>
  )
}

export default SearchForm