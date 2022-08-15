import React from 'react'
import { addToCart,calculateTotals } from '../redux/productsSlice'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
const Product = ({ id, image, name, price }) => {
  const dispatch = useDispatch()
  return (
    <div className="product-card">
      <Link to={`product/${id}`} className="img">
        <img src={image} alt="product-img" />
      </Link>
      <div className='product-footer'>
        <h2 className="name">{name}</h2>
        <h3 className='price'>${price}</h3>
        <button className="add-to-cart" onClick={() => {
          dispatch(addToCart(id))
          dispatch(calculateTotals())
        }}>add to cart</button>
      </div>
    </div>
  )
}

export default Product