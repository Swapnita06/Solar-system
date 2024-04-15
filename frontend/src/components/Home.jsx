import { Stack, colors } from '@mui/material'
import React from 'react'
import Page from './Page'
import Planets from './Planets'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Planets/>
      <Page/>
      <Planets/>
     
      </div>
  )
}

export default Home
