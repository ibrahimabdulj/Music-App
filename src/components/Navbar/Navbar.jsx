import React from 'react';
import {Link} from 'react-router-dom';
import { MusicIconData, 
  MusicIonData, 
  HomeIconData,
  UserIconData,
  FilesIconData,
  LikesIconData,
  FavouritesIconData,
  FileIconData,
  SettingIconData
  } from '../../data/NavbarData';
import { IconsWrapper, 
  MusicIcon,
  MusicIcons,
  SiconWrap,
  FiconWrap,
  HomeIcon,
  LikesIcon,
  UserIcon,
  Files,
  FilesIcon,
  FavouritesIcon,
  SettingIcon,

 } from './NavbarStyles'
function Navbar() {
  return (
    <IconsWrapper>
      {MusicIconData.map((el, index) => (
        <MusicIcon key={index}>{el.icon}</MusicIcon>
      ))}
      <FiconWrap>
        <Link to="/">
          {HomeIconData.map((el, index) => (
            <HomeIcon key={index} title="Home" >{el.icon}</HomeIcon>
          ))}
        </Link> 
      <Link to='/tracks' >
        {MusicIonData.map((el, index) => (
          <MusicIcons key={index} title="Musics" >{el.icon}</MusicIcons>
        ))}
      </Link>
      <Link to = "/files">
        {FilesIconData.map((el, index) => (
          <Files key={index} title="Files">{el.icon}</Files>
        ))}
      </Link>
      <Link to= "/user" >
        {UserIconData.map((el, index) => (
          <UserIcon key={index} title="User" >{el.icon}</UserIcon>
        ))}
      </Link>
      </FiconWrap>
      <br />
      <SiconWrap>
        <Link to= "/liked">
        {LikesIconData.map((el, index) => (
          <LikesIcon key={index} title="Your Likes" >{el.icon}</LikesIcon>
        ))}
        </Link>
        <Link to = "/favourites">
        {FavouritesIconData.map((el, index) => (
          <FavouritesIcon key={index} title="Favourites" >{el.icon}</FavouritesIcon>
        ))}
        </Link>
        <Link to= "/files" >
        {FileIconData.map((el, index) => (
          <FilesIcon key={index} title="File" >{el.icon}</FilesIcon>
        ))}
        </Link>
      </SiconWrap>
      <Link to="/settings">
      {SettingIconData.map((el, index) => (
        <SettingIcon key={index} title="Settings" >{el.icon}</SettingIcon>
      ))}
      </Link>
    </IconsWrapper>
  );
}

export default Navbar
