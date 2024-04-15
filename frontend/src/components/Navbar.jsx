import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Navbar = () => {
  const[scrolled,setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
  };
  window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
     <nav style={{position: 'fixed', top: 0, left: 0, width:'95%',marginTop:'0',
     backgroundColor: scrolled ? 'rgba(51, 51, 51, 0.8)' : '#333', // Change color when scrolled
      backdropFilter: scrolled ? 'blur(10px)' : 'none', // Add blur effect when scrolled
      color: '#fff',
     padding:'30px 40px',display: 'flex', justifyContent: 'space-between', alignItems: 'center',
     transition: 'background-color 0.3s, backdrop-filter 0.3s' 
     }}>
      <div style={{ fontWeight: 'bold', marginRight: 'auto', fontFamily:'Arial', fontSize:'24px' }}> 
        Solar System
      </div>
      <div style={{ display:'flex', gap:'100px',}}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
        <Link to= "/store" style={{ textDecoration: 'none', color: '#fff' }}>Store</Link>
        <Link to="/scientists" style={{ textDecoration: 'none', color: '#fff' }}>Scientist</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#fff' }}>My Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar
