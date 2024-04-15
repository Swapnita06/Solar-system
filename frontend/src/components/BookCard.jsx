import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookCard() {
  const [expanded, setExpanded] = useState(false);
  const [quantities, setQuantities] = useState({});

  const handleExpandClick = (id) => {
    setExpanded({...expanded, [id]: !expanded[id] });
  };


  const handleQuantityChange = (event,id)=>{
     const newQuantities ={ ...quantities, [id]: parseInt(event.target.value)};
     setQuantities(newQuantities);
    };

  const handleAddToCart = (id) => {
    // Implement your add to cart logic here
    console.log(`Added ${quantities[id]} item(s) of Book ${id}to cart.`);
  };

  const cardsData = [
    { id: 1, title: 'Book 1', image: '/images/lost_found.jpg', description: 'it was a good book' },
    { id: 2, title: 'Book 2', image: '/images/space.webp', description: 'it was a good book' },
    { id: 3, title: 'Book 3', image: '/images/lost_found.jpg', description: 'it was a good book' },
    { id: 4, title: 'Book 4', image: '/images/lost_found.jpg', description: 'it was a good book' },
    { id: 5, title: 'Book 5', image: '/images/lost_found.jpg', description: 'it was a good book' },
    { id: 6, title: 'Book 6', image: '/images/lost_found.jpg', description: 'it was a good book' },
    { id: 7, title: 'Book 7', image: '/images/lost_found.jpg', description: 'it was a good book' },
    { id: 8, title: 'Book 8', image: '/images/lost_found.jpg', description: 'it was a good book' }
    
  ];

  return (
    <>
    <h1 style={{color:"white", marginTop:'100px',textAlign:'center'}}>Top Astronomical Books For You!</h1>
    <div className='container' style={{ display: 'flex', flexWrap:'wrap',justifyContent:"space-around", gap:'40px'}}>
      {cardsData.map((card)=> (
    <Card key={card.id} style={{ maxWidth: 300, border: '5px solid rgb(174, 174, 242)',// Off-white border color
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.2)',
   }}>
      <CardMedia
        component="img"
        height="350"
        image={card.image}
        alt="Book Cover"
      />
      <CardActions disableSpacing>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor={`quantity-${card.id}`}>Quantity:</label>
          <select
           id={`quantity-$${card.id}`}
          value={quantities[card.id]||1} 
          onChange={(event)=>handleQuantityChange(event,card.id)} 
          style={{ marginRight: '8px', marginLeft: '4px' }}>
            {[...Array(10).keys()].map((index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
          <button onClick={handleAddToCart(card.id)}
          style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer',transition: 'background-color 0.3s ease' }}
          
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#0056b3'; // Darker blue hover effect
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#007bff'; // Reset background color on mouse out
          }}
          >
         Add to Cart
        </button>
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Book Description</Typography>
          <Typography paragraph>
            Good book it is!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      ))}
      </div>
      </>
  );
}
