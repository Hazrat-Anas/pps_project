import {useState,useEffect} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Pages/Home/Home'
import Contact from '../src/components/Pages/Contact/Contact'
import Cart from '../src/components/Pages/Cart/Cart'
import Product from './components/Pages/Product/Product'
function App() {
  const [cartItem, setcartItem] = useState(0)
  const itemHandler=(e)=>{
    if(e==1){
      setcartItem(cartItem+1)
    }
    else
    setcartItem(cartItem-1)
  }
useEffect(() => {
    let list = localStorage.getItem('OrderedList')
    if (list) {
      let listjson=JSON.parse(list)
      setcartItem(listjson.length)
   
    }
}, [cartItem])

  return (
    <BrowserRouter basename='/'>
      <Routes>
        
        <Route path="/" element={<Product cartItem={cartItem} itemHandler={itemHandler} />}   />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact cartItem={cartItem} itemHandler={itemHandler} />}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
