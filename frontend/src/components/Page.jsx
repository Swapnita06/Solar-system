import React from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar';

const Page = () => {
  const images = [
    'https://via.placeholder.com/1000x500',
    'https://via.placeholder.com/1000x500',
    'https://via.placeholder.com/1000x500',
    'https://via.placeholder.com/1000x500',
    'https://via.placeholder.com/1000x500'
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <div>
      <marquee scrollamount="20" direction="left" loop="0" style={{ width: '100%', height: '200px', position: 'relative' }}>
        {duplicatedImages.map((image, index) => (
          <img
            src={image}
            alt={`img ${index + 1}`}
            key={index}
            style={{ width: '200px', height: '200px', margin:'50px', padding:'20px' }}
          />
        ))}
      </marquee>
    </div>
  );
};

export default Page;
