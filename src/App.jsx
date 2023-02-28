import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Product from './components/Product'

const App = () => {
  return (
    <div>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
   
  </div>
  )
}

export default App