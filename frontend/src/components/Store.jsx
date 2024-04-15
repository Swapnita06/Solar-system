import { Stack } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import BookCard from './BookCard'

const Store = () => {
  return (
    <Stack>
      <Navbar/>
     <h1 style={{color:"white", marginTop:'100px',textAlign:'center'}}>Top Astronomical Books For You!</h1>
      <BookCard/>
    </Stack>
  )
}

export default Store
