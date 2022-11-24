import React, {useState, createContext} from 'react'
import {Container} from '../globalStyles';
import Navbar from '../components/Navbar/Navbar';
import Track from '../components/Navbar/Tracks/Tracks';
export const MusicCtx = createContext();


function Tracks() {
   const [songData, setSongData] = useState({
     songRef: null,
     songId: null,
     songSource: null,
     songIndex: null,
     isPlaying: false,
     play: null,
     pause: null,
   });
  return (
    <MusicCtx.Provider value={{songData, setSongData}}>
      <Container>
        <Navbar />
        <Track />
      </Container>
    </MusicCtx.Provider>

  );
}

export default Tracks
