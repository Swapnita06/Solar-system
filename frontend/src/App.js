import React from 'react'
import Home from './components/Home'
import Scientist from './components/Scientist'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import './App.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Page from './components/Page';


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
      <Page/>
      </BrowserRouter>
      </>
  )
}

export default App