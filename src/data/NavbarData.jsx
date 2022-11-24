import {BsMusicNoteList, 
  BsFilesAlt
} from 'react-icons/bs';
import { VscHome, VscFileSubmodule } from "react-icons/vsc";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import {MdStarBorder} from 'react-icons/md'
import { CiSettings } from "react-icons/ci";

const iconStyle = (Icon) => <Icon size="2rem" color ="#fefeff" />;

export const MusicIconData = [
  {
    icon: iconStyle(BsMusicNoteList),
    title: "music",
  },
]
export const HomeIconData =[
  {
    icon: iconStyle(VscHome),
    title: "home",
  },
]
export const MusicIonData = [
  {
    icon: iconStyle(IoMusicalNotesOutline),
    title: "Musics",
  },
];
export const FilesIconData = [
  {
    icon: iconStyle(BsFilesAlt),
    title: "File",
  },
];
export const UserIconData = [
  {
    icon: iconStyle(HiOutlineUser),
    title: "User",
  },
];
export const LikesIconData = [
  {
    icon: iconStyle(FcLike),
    title: "Likes",
  },
];
export const FavouritesIconData = [
  {
    icon: iconStyle(MdStarBorder),
    title: "Favourites",
  },
];
export const FileIconData = [
  {
    icon: iconStyle(VscFileSubmodule),
    title: "Favourites",
  },
];
export const SettingIconData = [
  {
    icon: iconStyle(CiSettings),
    title: "Favourites",
  },
];
