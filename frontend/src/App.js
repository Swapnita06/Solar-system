import React from 'react'
import Home from './components/Home'
import Scientist from './components/Scientist'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import './App.css'
import Navbar from './components/Navbar';


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
      </BrowserRouter>
     
      </>
  )
}

export default App