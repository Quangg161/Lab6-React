import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Header from './components/header';
import {useState} from 'react'

function App() {
  const [ cartItems, setCartItems] = useState([])
  const handleAddToCart = (product) => {
    setCartItems([...cartItems,product])
  }
  const handleCheckout = () =>{
    setCartItems([])
  }
  return (
   <BrowserRouter>
   <Header cartItems={cartItems}/>
    <Routes>
      <Route index element = {<Products handleAddToCart={handleAddToCart} />}/>
      <Route path = '/detail/:id' element ={<ProductDetail handleAddToCart={handleAddToCart} />}/>
      <Route path = '/cart' element ={<Cart cartItems={cartItems} handleCheckout={handleCheckout} />}/>
    </Routes>
   </BrowserRouter> 
  );
}

export default App;
