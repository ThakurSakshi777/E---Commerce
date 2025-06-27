import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import Shop from './Pages/Shop/Shop'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path ='/shop' element = {<Shop/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

