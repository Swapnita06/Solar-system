import { Stack } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import BookCard from './BookCard'


const Store = () => {
  return (
    <Stack>
      <Navbar/>
     <BookCard/>
    </Stack>
  )
}

export default Store
