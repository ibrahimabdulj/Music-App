import React, { useState, createContext } from "react";
import { audios } from "../../../data/AudioData";
import {
  MusicDisplays,
  NowPlayingSection,
  TrackDisplayWrapper,
  Head,
  AddCompo,
  CurrentPlayImg,
  CurrentPlayImgWrap,
} from "./NowPlayingStyles";
// import {sliderSettings} from "../../../data/AudioData";
import { AiOutlinePlus } from "react-icons/ai";
import MusicCard from "../MusicCard/MusicCard";
import SongCard from "../MusicCard/SongCard";
// import Slider from 'react-slick';

export const SongCtx = createContext();

function Nowplaying() {
  const [songId, setSongId] = useState("");

  const [songData, setSongData] = useState({
    songRef: null,
    songId: null,
    bg: null,
    songSource: null,
    songIndex: null,
    isPlaying: false,
    play: null,
    pause: null,
    currentTime: 0,
    duration: 0,
  });

  return (
    <SongCtx.Provider value={{ songData, setSongData }}>
      <NowPlayingSection>
        <Head>
          <h2>Next Composition</h2>
          <AddCompo>
            <AiOutlinePlus />
          </AddCompo>
        </Head>
        <MusicDisplays>
          {audios.map((el, index) => (
            <SongCard
              setSongId={setSongId}
              songId={songId}
              setSongData={setSongData}
              source={el.src}
              key={index}
              index={index}
              bg={el.thumbnail}
            />
          ))}
        </MusicDisplays>
        <TrackDisplayWrapper>
            <CurrentPlayImgWrap>
              <CurrentPlayImg src={songData?.bg} />
            </CurrentPlayImgWrap>
          <MusicCard songId={songId} songData={songData} />
        </TrackDisplayWrapper>
      </NowPlayingSection>
    </SongCtx.Provider>
  );
}

export default Nowplaying;
