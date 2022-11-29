import React from 'react';
import { Container } from "../globalStyles";
import Navbar from "../components/Navbar/Navbar";
import Users from '../components/Navbar/UsersLog/Users';

function User() {
  return (
    <Container>
      <Navbar/>
      <Users/>
    </Container>
    
  )
}

export default User
