import React, {useState} from "react";
import { TrackContainer } from "../../../globalStyles";
import TrackEl from './Track';
import { audios } from "../../../data/AudioData";

function Track() {
const [isActive, setIsActive] = useState(null);
  const handlePlayTrack = (index) => {
    setIsActive(index + 1);
  };
  return (
    <TrackContainer>
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