import React, {useState, createContext} from 'react'
import { Containers, Head} from '../globalStyles';
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
    <MusicCtx.Provider value={{ songData, setSongData }}>
      <Head>
        <h1>Tracks</h1>
      </Head>
      <Containers>
        <Navbar />
        <Track />
      </Containers>
    </MusicCtx.Provider>
  );
}

export default Tracks
