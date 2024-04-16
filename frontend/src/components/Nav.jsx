import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Nav() {
     
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" sx={{ backdropFilter: isScrolled ? 'blur(10px)' : 'none' }}>
      <Toolbar 
      sx={{ 
        justifyContent: 'space-between',
         bgcolor: isScrolled?'rgba(51,51,51,0.8)':'#333',padding:'30px 40px',color: '#fff',transition: 'background-color 0.3s, backdrop-filter 0.3s'  }}>
        <Typography variant="h5" sx={{ color:"white", fontWeight: 'bold', fontFamily:"Montserrat", display: 'flex', alignItems: 'center',fontSize:'39px',letterSpacing:'2px',textShadow: '2px 2px 4px rgba(3, 5, 0, 5)'}}>
          Solar System
        </Typography>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button sx={{
              color:"black",
              fontSize:"15px",
              fontFamily:"Montserrat",
              fontWeight:"800",
              '&:hover': {
                backgroundColor: '#ffcc00', // Change background color on hover
                color: 'black' // Change text color on hover
              }
            }}>Home</Button>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <Button sx={{
              color:"black",
              fontSize:"15px",
              fontFamily:"Montserrat",
              fontWeight:"800",
              '&:hover': {
                backgroundColor: '#ffcc00', // Change background color on hover
                color: 'black' // Change text color on hover
              }
            }}>My Cart</Button>
          </Link>
          <Link to="/store" style={{ textDecoration: 'none' }}>
            <Button sx={{
              color:"black",
              fontSize:"15px",
              fontFamily:"Montserrat",
              fontWeight:"800",
              '&:hover': {
                backgroundColor: '#ffcc00', // Change background color on hover
                color: 'black' // Change text color on hover
              }
            }}>Store</Button>
          </Link>
          <Link to="/scientists" style={{ textDecoration: 'none' }}>
            <Button sx={{
              color:"black",
              fontSize:"15px",
              fontFamily:"Montserrat",
              fontWeight:"800",
              '&:hover': {
                backgroundColor: '#ffcc00', // Change background color on hover
                color: 'black' // Change text color on hover
              }
            }}>Scientists</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;