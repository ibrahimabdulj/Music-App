import React, {useState} from "react";
import { TrackContainer, Head } from "../../../globalStyles";
import TrackEl from './Track';
import { audios } from "../../../data/AudioData";

function Track(index) {
const [isActive, setIsActive] = useState(null);
  const handlePlayTrack = (index) => {
    setIsActive(index + 1);
  };
  return (
    <TrackContainer>
      <Head>
        <h1>Tracks</h1>
      </Head>
      {audios.map((el, index) => (
        <TrackEl
          el={el}
          index={index}
          key={index}
          isActive={isActive}
          handlePlayTrack={handlePlayTrack}
        />
      ))}
    </TrackContainer>
  );
}

export default Track;

//  const togglePlayPause = () => {
//    if (songData.isPlaying) {
//      setSongData({songData, isPlaying: false });
//      songData?.songRef?.current.pause();
//       setSongData({
//         ...songData,
//         isPlaying: false,
//         songIndex: index,
//       });
//    } else {
//      setSongData({ songData,
//         isPlaying: true,
//         songRef: audioPlayer,
//         songIndex: index, });
//      songData?.songRef?.current.play();
//    }
//  };
