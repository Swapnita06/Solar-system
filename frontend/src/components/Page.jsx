import React, { useState, useEffect } from 'react';

const Page = () => {
  const images = [
    'https://via.placeholder.com/1000x500/FF5733/FFFFFF',
    'https://via.placeholder.com/1000x500/C70039/FFFFFF',
    'https://via.placeholder.com/1000x500/900C3F/FFFFFF',
    'https://via.placeholder.com/1000x500/581845/FFFFFF',
    'https://via.placeholder.com/1000x500/900C3F/FFFFFF'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image ${index}`}
          style={{
            display: index === currentIndex ? 'block' : 'none',
            width: '200px',
            height: '200px'
          }}
        />
      ))}
    </div>
  );
};

export default Page;
