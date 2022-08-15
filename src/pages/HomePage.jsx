import React from 'react'
import ProductsList from '../components/ProductsList'
import { refresh } from '../redux/productsSlice'

import { useDispatch } from 'react-redux';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
const HomePage = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Hero/>
      <ProductsList />
      <button className='btn refresh' onClick={()=>dispatch(refresh())}>refresh</button>
      <Footer/>
    </>
  )
}

export default HomePage