
import { getProducts } from './redux/productsSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleProduct from './pages/SingleProduct'
import CartPage from './pages/CartPage'
function App() {
  const { isLoading, products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProducts())
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  }
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route  exact path='/' element={<HomePage />} />
        <Route path={'product/:id'} element={<SingleProduct />} />
        <Route path='cart' element={<CartPage/>}/>
      </Routes>

    </HashRouter>
  );
}

export default App;
