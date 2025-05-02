import React from 'react'
import { Stack } from '@mui/material';
import Header from './Header';
import FloristicService from './FloristicService';
import About from './About';
import TypeCard from './TypeCard';
import Gallery from './Gallery';
import Footer from './Footer';
import Product from './Product';
const Components = () => {
  return (
    <Stack>
        
    <Stack>
        <Header/>
    </Stack>

    <Stack >
        <FloristicService/>
    </Stack>

    <Stack>
      <About/>
    </Stack>

    <Stack>
      <Product/>
    </Stack>


    <Stack>
        <TypeCard/>
    </Stack>

    <Stack>
      <Gallery/>
    </Stack>

    <Stack>
      <Footer/>
    </Stack>
    </Stack>
  )
}

export default Components;