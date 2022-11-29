import React, { useState, useRef, useEffect, useContext } from "react";
import { Indivsong } from "./SongCardStyles";
import { FaPlay, FaPause } from "react-icons/fa";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { PlayPause, AudioSource } from "./SongCardStyles";
import { SongCtx } from "../Nowplaying/Nowplaying";

function SongCard({ bg, source, index }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { songData, setSongData } = useContext(SongCtx);
  const audioPlayer = useRef();

  useEffect(() => {
    if (songData?.songId === "" || songData?.songId !== source) {
      audioPlayer.current.pause();
      setIsPlaying(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songData?.songId]);

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioPlayer.current.pause();
      setSongData({
        ...songData,
        isPlaying: false,
        songIndex: index,
      });
    } else {
      setIsPlaying(true);
      audioPlayer.current.play();
      setSongData({
        songId: source,
        songSource: source,
        bg: bg,
        songRef: audioPlayer,
        isPlaying: true,
        songIndex: index,
        currentTime: audioPlayer?.current?.currentTime,
        duration: audioPlayer?.current?.duration,
      });
    }
  };

  return (
    <Indivsong background={bg}>
      <AudioSource ref={audioPlayer} src={source} preload="metadata" />
      <GrChapterPrevious />
      <PlayPause onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </PlayPause>
      <GrChapterNext />
    </Indivsong>
  );
}

export default SongCard;
