import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route, BrowserRouter,Link } from 'react-router-dom'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import Cart from './components/cart'

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
