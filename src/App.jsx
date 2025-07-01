import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path ='/shop' element = {<Shop/>}/>
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path='/Contact' element = {<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

