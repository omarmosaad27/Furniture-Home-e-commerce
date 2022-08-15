import React from 'react'
import { Link } from 'react-router-dom'
import SearchFrom from './SearchForm'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
    const { amount } = useSelector(state => state.products);
  return (
    <nav>
      <header>
        <Link to={'/'} className="logo">
        Furniture Home
        </Link>
      </header>
      <div className="search-cart">
        <SearchFrom />
        <Link to={'/cart'} className="cart-icon">
          <AiOutlineShoppingCart />
        <p>{ amount }</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar