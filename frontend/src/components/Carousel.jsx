import React from 'react';
import { useEffect } from 'react';
import { TextField, Button } from '@mui/material'; // Import Material-UI components

const Carousel = () => {
  // Array of placeholder image URLs
  const images = [
    'https://via.placeholder.com/1000x500',
    'https://via.placeholder.com/1000x500',
    'https://via.placeholder.com/1000x500',
    'https://via.placeholder.com/1000x500',
    'https://via.placeholder.com/1000x500'
  ];

  // Duplicate the first image and append it to the end of the array
  const duplicatedImages = [...images, ...images];

  // State to keep track of the index of the current image
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  useEffect(() => {
   //function to handle automatic sliding
   const slideInterval=setInterval(()=>{
    setCurrentImageIndex(prevIndex=> (prevIndex === images.length -1?0:prevIndex +1));
   },1000); //change slide interval as needed(in milliseconds)
   
   //clear interval on component unmount
   return () => clearInterval(slideInterval);
  },[duplicatedImages.length]);
  // Function to handle moving to the previous image
 // const prevImage = () => {
   // setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
 // };

  // Function to handle moving to the next image
  //const nextImage = () => {
  //  setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
 // };

  return (
    <div>
      {/* Carousel */}
      <div className="carousel" style={{ overflow: 'hidden', width: '100%', height: '200px', position: 'relative' }}> {/* Adjusted height */}
      <div className="carousel-inner" style={{ display: 'flex', transition: 'transform 1s', transform: `translateX(-${currentImageIndex * 100}%)` }}>
      {duplicatedImages.map((image, index) => (
        <img
          src={image}
          alt={`img ${index + 1}`}
          key={index}
          style={{ width: `${100 / images.length}%`, height: '200px' }}
        />
      ))}
      </div>
      </div>
    </div>
  );
};

export default Carousel;