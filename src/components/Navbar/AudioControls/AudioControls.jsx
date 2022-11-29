import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa";
import { SongCtx } from "../Nowplaying/Nowplaying";
import {
  AudioSource,
  ForwardBackward,
  PlayPause,
  CurrentTime,
  Duration,
  Input,
  Controls,
} from "./AudioControlsStyles";

function AudioControls() {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const { songData, setSongData } = useContext(SongCtx);
  const progresBar = useRef();
  const animationRef = useRef();

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes}:${returnSeconds} `;
  };

  const togglePlayPause = () => {
    if (songData.isPlaying) {
      setSongData({ ...songData, isPlaying: false });
      songData?.songRef?.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      setSongData({ ...songData, isPlaying: true });
      songData?.songRef?.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changePlayerCurrentTime = () => {
    progresBar.current.style.setProperty(
      "--seek-before-width",
      `${(progresBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progresBar.current.value);
  };
  const whilePlaying = useCallback(() => {
    progresBar.current.value = songData?.songRef?.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }, [songData]);
  //
  const changeRange = () => {
    if (!songData?.songRef) return;

    songData.songRef.current.currentTime = progresBar.current.value;
    changePlayerCurrentTime();
  };
  useEffect(() => {
    if (!songData?.songId) return;
    const seconds = Math.floor(songData?.songRef?.current.duration);
    setDuration(seconds);
    progresBar.current.max = seconds;

    if (songData?.isPlaying) {
      //start the animation
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      cancelAnimationFrame(animationRef.current);
    }
  }, [songData?.songId, songData?.songRef, songData?.isPlaying, whilePlaying]);

  return (
    <div>
      <Controls>
        <AudioSource src={songData?.songId} preload="metadata"></AudioSource>

        <ForwardBackward>
          <BsArrowLeftShort />
          30
        </ForwardBackward>
        <PlayPause onClick={togglePlayPause}>
          {songData.isPlaying ? <FaPause /> : <FaPlay />}
        </PlayPause>
        <ForwardBackward>
          30
          <BsArrowRightShort />
        </ForwardBackward>
        <CurrentTime>{calculateTime(currentTime)}</CurrentTime>
        <Input
          type="range"
          defaultValue="0"
          ref={progresBar}
          onChange={changeRange}
        />
        <Duration>
          {duration && !isNaN(duration) && calculateTime(duration)}
        </Duration>
      </Controls>
    </div>
  );
}

export default AudioControls;
