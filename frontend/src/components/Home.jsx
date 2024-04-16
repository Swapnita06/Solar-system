import { Stack, colors } from '@mui/material'
import React from 'react'
import Page from './Page'
import Planets from './Planets'
import Navbar from './Navbar'
import Plannn from './Plannn'
import ParticlesComponent from './Particle'
import Parallax from './Parallax'

function Home() {
  return (
    <div>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Parallax/>
      <Page/>
      <Plannn/>
      </div>
  )
}

export default Home
