import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Scientist from './components/Scientist'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path='/store' element={<Store/>}/>
        <Route path='/scientists' element={<Scientist/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  )
}

export default App
