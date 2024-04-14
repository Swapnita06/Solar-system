import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
     <nav style={{marginTop:'0',backgroundColor: '#333', color: '#fff', padding:'30px 40px',display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', marginRight: 'auto', fontFamily:'Arial', fontSize:'24px' }}> 
        Solar System
      </div>
      <div style={{ display:'flex', gap:'20px'}}>
        <Link to="/home" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
        <Link to= "/store" style={{ textDecoration: 'none', color: '#fff' }}>Store</Link>
        <Link to="/scientists" style={{ textDecoration: 'none', color: '#fff' }}>Scientist</Link>
      </div>
    </nav>
  )
}

export default Navbar
