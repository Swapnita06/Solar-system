import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css'
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
     <nav style={{position: 'fixed', top: 0, left: 0, width:'95%',marginTop:'0', fontFamily:'Montserrat',
     backgroundColor: scrolled ? 'rgba(51, 51, 51, 0.8)' : '#333', // Change color when scrolled
      backdropFilter: scrolled ? 'blur(10px)' : 'none', // Add blur effect when scrolled
      color: '#fff',
     padding:'15px 40px',display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000,
     transition: 'background-color 0.3s, backdrop-filter 0.3s' ,flexWrap:'wrap'
     }}>
      <div style={{ fontWeight: 'bold', marginRight: 'auto', fontFamily:'Montserrat', fontSize:'30px',letterSpacing:'2px',textShadow: '2px 2px 4px rgba(3, 5, 0, 5)' }}> 
        COSMIC FUZZ
      </div>
      <div style={{ display:'flex', gap:'100px',flexWrap:'wrap'}}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', padding: '10px 20px', fontFamily:'Montserrat',fontSize:'18px',
            border: '2px solid transparent',borderRadius: '5px',transition: 'color 0.3s',bordercolor:'0.3s', transform: '0.3s'}}
         
            onMouseEnter={(e) => {
              e.target.style.color = '#ffcc00'; // Change color on hover
              e.target.style.borderColor = '#ffcc00'; // Change border color on hover
              e.target.style.transform = 'scale(1.1)'; // Zoom out effect on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#fff'; // Revert color on mouse leave
              e.target.style.borderColor = 'transparent'; // Revert border color on mouse leave
              e.target.style.transform = 'scale(1)'; // Revert zoom out effect on mouse leave
            }}
        
        >Home</Link>
        <Link to= "/store" style={{ textDecoration: 'none', color: '#fff',padding: '10px 20px',fontSize:'18px',
            border: '2px solid transparent',borderRadius: '5px',transition: 'color 0.3s',bordercolor:'0.3s', transform: '0.3s' }}
            onMouseEnter={(e) => {
              e.target.style.color = '#ffcc00'; // Change color on hover
              e.target.style.borderColor = '#ffcc00'; // Change border color on hover
              e.target.style.transform = 'scale(1.1)'; // Zoom out effect on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#fff'; // Revert color on mouse leave
              e.target.style.borderColor = 'transparent'; // Revert border color on mouse leave
              e.target.style.transform = 'scale(1)'; // Revert zoom out effect on mouse leave
            }}
            
            >Store</Link>
        <Link to="/scientists" style={{ textDecoration: 'none', color: '#fff',padding: '10px 20px',fontSize:'18px',
            border: '2px solid transparent',borderRadius: '5px',transition: 'color 0.3s',bordercolor:'0.3s', transform: '0.3s' }}
            
            onMouseEnter={(e) => {
              e.target.style.color = '#ffcc00'; // Change color on hover
              e.target.style.borderColor = '#ffcc00'; // Change border color on hover
              e.target.style.transform = 'scale(1.1)'; // Zoom out effect on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#fff'; // Revert color on mouse leave
              e.target.style.borderColor = 'transparent'; // Revert border color on mouse leave
              e.target.style.transform = 'scale(1)'; // Revert zoom out effect on mouse leave
            }}
            >Scientist</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#fff' ,padding: '10px 20px',fontSize:'18px',
            border: '2px solid transparent',borderRadius: '5px',transition: 'color 0.3s',bordercolor:'0.3s', transform: '0.3s'}}
            
            onMouseEnter={(e) => {
              e.target.style.color = '#ffcc00'; // Change color on hover
              e.target.style.borderColor = '#ffcc00'; // Change border color on hover
              e.target.style.transform = 'scale(1.1)'; // Zoom out effect on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#fff'; // Revert color on mouse leave
              e.target.style.borderColor = 'transparent'; // Revert border color on mouse leave
              e.target.style.transform = 'scale(1)'; // Revert zoom out effect on mouse leave
            }}
            >My Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar

