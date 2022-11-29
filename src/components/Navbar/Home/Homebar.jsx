import React from 'react'
import Tracks from '../Tracks/Tracks';
import {HomeSection,
  Line,
  MusicImg,
  TracksWrap,
} from './HomebarStyles';
const Image = "assets/ph-10147.jpg";

function Homebar() {
  return (
    <HomeSection>
      <h1>Home</h1>
      <MusicImg src={Image} alt=" " />
      <Line/>
      <TracksWrap><Tracks/></TracksWrap>
    </HomeSection>
  )
}

export default Homebar;
