import React,{useEffect,useState} from 'react'
import Home from './components/Home'
import Scientist from './components/Scientist'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import './App.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Page from './components/Page';
import Planets from './components/Planets';
import Cart from './components/Cart';
import BookCard from './components/BookCard';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(timeout);
  }, []);

  const [cartItems, setCartItems] = useState([]);
  
    // Function to add item to cart
    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  return (
    <BrowserRouter>
    {isLoading ? ( // Show loading component if isLoading is true
        <div className="loading">
          <img  src='./images/loading2.gif' alt="Loading" />
        </div>
      ) : (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/store' element={<Store/>}/>
        <Route path='/scientists' element={<Scientist/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} />}
        />
        <Route
          path="/book"
          element={<BookCard cartItems={cartItems} setCartItems={setCartItems} />} // Pass addToCart function to BookCard component
        />
        <Route path="/planet/:name" component={Planets} />
      </Routes>
      </>
      )}
      </BrowserRouter>
 
  )
}

export default App