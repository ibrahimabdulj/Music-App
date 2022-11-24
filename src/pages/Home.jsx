import React from 'react'
import { Container } from '../globalStyles'
import Navbar from '../components/Navbar/Navbar'
import Nowplaying from '../components/Navbar/Nowplaying/Nowplaying'

function Home() {
  return (
    <Container>
      <Navbar/>
      <Nowplaying/>
    </Container>
  )
}

export default Home
