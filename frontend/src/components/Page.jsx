import React from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar';

const Page = () => {
  const images = [
    './images/mercury.png',
    './images/vee.png',
    './images/Earth.png',
    './images/pngwing.com (2).png',
    './images/jupiter.png',
    './images/saturn.png',
    './images/uranus.png',
    './images/neptune.png'
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <div>
      <marquee scrollamount="20" direction="left" loop="0" style={{ width: '100%', height: '300px', position: 'relative' }}>
        {duplicatedImages.map((image, index) => (
          <img
            src={image}
            alt={`img ${index + 1}`}
            key={index}
            style={{ width: '120px', height: '120px', margin:'50px', padding:'20px' }}
          />
        ))}
      </marquee>
    </div>
  );
};

export default Page;
