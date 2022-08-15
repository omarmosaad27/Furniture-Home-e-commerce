import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { addToCart,calculateTotals } from '../redux/productsSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router';
const SingleProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products);
  const product = products.filter((product) => product.id === id)
  console.log(product);
  return (
    <section className='product-page'>
      {product.map((item) => {
        const { category, colors, company, description, id, image, name, price } = item;
        return (
          <div className="product" key={id}>
            <div className="img">
              <img src={image} alt="product" />
            </div>
            <div className="single-info">
              <h1 className="single-name">{name}</h1>
              <h2 className="single-company">company : {company}</h2>
              <h3 className='category'>category : {category}</h3>
              <p className="desc">{description}</p>
              <h4 className="single-price">${price}</h4>
              
                <ul className='color'>
                <div>availble in</div>
                {colors.map((color,index) => {
                  return (
                    
                    <li key={index} style={{background:`${color}`}}>{""}</li>
                  )
                })}
                </ul>
              
              <button className="add-to-cart" onClick={() => {
                dispatch(addToCart(id));
                dispatch(calculateTotals());
                
              }}>add To Cart</button>
            <Link to={'/'} className="continue-btn">
              <AiOutlineArrowLeft/> <div>continue Shopping</div>
            </Link>

            </div>
          </div>
        )
      })}
    </section>
  )
}

export default SingleProduct