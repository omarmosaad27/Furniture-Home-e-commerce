import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
const ProductsList = () => {
  const { products } = useSelector(state => state.products);
  return (
    <section className='our-products'>
    <h2 className='title'>Our Products</h2>
    <div className='products-list'>
      
      {products.map((product) => {
        return (
          <Product key={product.id} {...product}/>
        )
      })}
    </div>
    </section>
  )
}

export default ProductsList