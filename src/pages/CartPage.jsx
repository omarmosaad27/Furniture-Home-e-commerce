import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {removeFromCart,increaseAmount,decreaseAmount,calculateTotals} from '../redux/productsSlice'
const CartPage = () => {
  const { cart,amount,total } = useSelector(state => state.products);
  const dispatch = useDispatch()
    useEffect(() => {
    // dispatch(getProducts())
    dispatch(calculateTotals())
  }, [cart]);
  console.log(cart);
  return (
      <div className="shopping-cart" >
        <header>
          <h1>shopping cart</h1>
          <h2>{amount} items</h2>
      </header>
      <div className="underline"></div>
        {
        cart.map((item) => {
          return (
            <>
              <div className="item" key={item.id}>
                    <div className="img">
                      <img src={item.image} alt="item" />
                    </div>
                    <div className="item-info">
                      <div className="item-name">{item.name}</div>
                      <div className="item-company">company: {item.company}</div>
                      <button className="remove" onClick={()=>dispatch(removeFromCart(item.id))}>remove</button>
                    </div>
                    <div className="amount">
                      <button className="increase" onClick={()=>dispatch(increaseAmount(item.id))} >+</button>
                      <div>{item.amount}</div>
                      <button className="decrease"  onClick={()=>dispatch(decreaseAmount(item.id))}>-</button>
                    </div>
                    <div className="item-calc">
                
                    <div className="item-price">
                      price: ${item.price}
                    </div>
                    <div className="item-total">
                      total: ${item.price * item.amount}
                    </div>
                    </div>
                
                
              </div>
            </>
              

              
            
          )
        })
      }
      {
        cart.length>0&&
              <div className="order">
                <div>
                <h2>total Cost</h2>
                <h2>${total}</h2>
                </div>
                <button className="check">check out</button>
              </div>
      }
        <div className='cart-footer'>
          <Link to={'/'} className="continue-btn">
            <AiOutlineArrowLeft/> <div>continue Shopping</div>
          </Link>
        </div>
      </div>
    
  )
}

export default CartPage