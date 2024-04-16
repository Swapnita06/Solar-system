import React from 'react';
import './Plannn.css'

const planetsData = [
  {
    name: 'Mercury',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ,image: './images/mercury_revolving.gif',
  },
  {
    name: 'Venus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './images/Venus_rotation.gif',
  },
  {
    name: 'Earth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './images/earth_rotating.gif',
  },
  {
    name: 'Mars',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitv...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './images/Spinning_Mars.gif',
  },
  {
    name: 'Jupiter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    
    image: './images/jupiter_rotating.gif',
  },
  {
    name: 'Saturn',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './images/saturn_rotating.gif',
  },
  {
    name: 'Uranus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    
    image: './images/uranus_rotating.webp',
  },
  {
    name: 'Neptune',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './images/Neptune_rot.gif',
  },

];

const Plannn = () => {
  return (
    <div>
      <h1 style={{ color: "white", fontFamily: 'Montserrat', textAlign: 'center', fontSize: '45px',borderBottom: '2px solid white',gap:'5px'}}>Wanna Explore The Planets?</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',gap:'20px' }}>
        {planetsData.map((planet, index) => (
          <div className='swapnita' 
          key={index}
           style={{ 
            display: 'flex', 
            backgroundImage: `url('./images/stars.jpg')`, borderRadius: '10px', padding: '5px', margin: '5px', height: '280px', overflow: 'hidden',flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Alternating left and right
             marginLeft: index % 2 === 0 ? '5px' : '500px', // Add left margin for odd indices
              marginRight: index % 2 === 0 ? '500px' : '10px',
              gap:'10px'
          }}>
            <div className='mercury'> 
              <img style={{ width: "300px", height: "270px", margin: "5px" }} src={planet.image} alt={planet.name} />
            </div>
            <div className='mercury'>
            <h1 style={{ color: 'white', fontFamily: 'Poppins',textAlign:'center' }}>{planet.name}</h1>
              <p style={{ color: "white", padding: "20px", margin: "40px", fontFamily: 'Montserrat' }}>{planet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plannn;
