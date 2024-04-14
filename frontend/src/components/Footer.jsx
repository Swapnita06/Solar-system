import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Footer className="footer">
    <div className="footer__content">
      <p>&copy; {new Date().getFullYear()} Developed by: Swapnita Singh</p>
      <p> All rights reserved.</p>
      <ul className="footer__links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/store" >Store</Link></li>
        <li><Link to="/scientists">Scientist</Link></li>
      </ul>
    </div>
  </Footer>
  )
}

export default Footer
