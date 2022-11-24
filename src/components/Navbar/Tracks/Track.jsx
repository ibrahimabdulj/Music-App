import React, { useState, useContext, useRef, useEffect } from "react";
import { FavouritesCtx } from "../../../App";
import {
  Lists,
  AddTolikesIcon,
  OptionsIcon,
  Suggestion,
  Image,
  Title,
} from "./TrackStyles";
import { PlayPause } from "../MusicCard/SongCardStyles";
import { TbHeartPlus } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import { FaPlay, FaPause } from "react-icons/fa";
import { AudioSource } from "../MusicCard/SongCardStyles";

const TrackEl = ({ el, index, isActive, handlePlayTrack }) => {
  const { likes, setLikes, fav, setFav } = useContext(FavouritesCtx);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef();

  const handleAddFav = (e, el) => {
    e.preventDefault();
    fav.length > 0 ? setFav([...fav, el]) : setFav([el]);
  };
  const handleLiked = (e, el) => {
    e.preventDefault();
    likes.length > 0 ? setLikes([...likes, el]) : setLikes([el]);
  };

  const togglePlayPause = () => {
    handlePlayTrack(index);
    if (isPlaying) {
      setIsPlaying(false);
      audioPlayer.current.pause();
    } else {
      setIsPlaying(true);
      audioPlayer.current.play();
    }
  };
  
  useEffect(()=> {
    if (isActive && isActive !== index + 1) {
      audioPlayer.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, index]);

  return (
    <Lists
      className={`${isActive && isActive === index + 1 && "active"}`}
      onClick={(e) => handlePlayTrack(index)}
    >
      <Image src={el.thumbnail} alt="" />
      <Title>{el.title}</Title>
      <Suggestion>
        <AudioSource ref={audioPlayer} src={el.src} preload="metadata" />
        <PlayPause onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </PlayPause>
        <AddTolikesIcon
          title="Add to Likes"
          onClick={(e) => handleLiked(e, el)}
        >
          <TbHeartPlus />
        </AddTolikesIcon>
        <OptionsIcon title="Options" onClick={(e) => handleAddFav(e, el)}>
          <SlOptions />
        </OptionsIcon>
      </Suggestion>
    </Lists>
  );
};

export default TrackEl;
