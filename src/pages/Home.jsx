import React from 'react';
import { Container } from "../globalStyles";
import Navbar from "../components/Navbar/Navbar";
import Homebar from '../components/Navbar/Home/Homebar';

function Home() {
  return (
    <Container>
      <Navbar />
      <Homebar/>
    </Container>
  );
}

export default Home
