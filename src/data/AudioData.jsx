import Song from "../../src/Assets/Skales-ft-Phyno-Gbagbe.mp3";
import Song2 from "../../src/Assets/01. Taylor Swift - ...Ready For It.mp3";
import Song3 from "../../src/Assets/02 Come Back... Be Here.mp3";
import Song4 from "../../src/Assets/03 Girl at Home.mp3";
import Song5 from "../../src/Assets/05 Red (Original Demo Recording).mp3";
// import Image from "../../src/Assets/ph-10274.jpg";

const Image1 = "assets/ph-10274.jpg";
const Image2 = "assets/IMG_6466.JPG";
const Image3 = "assets/IMG_6468.JPG";
const Image4 = "assets/IMG_6480.JPG";
const Image5 = "assets/IMG_6469.JPG";

export const audios = [
  {
    id: 1,
    src: Song,
    title: "Gbagbe",
    thumbnail: Image1,
  },
  {
    id: 2,
    src: Song2,
    title: "Ready For It",
    thumbnail: Image2,
  },
  {
    id: 3,
    src: Song3,
    title: "Be Here ",
    thumbnail: Image3,
  },
  {
    id: 4,
    src: Song4,
    title: "Girl at Home",
    thumbnail: Image4,
  },
  {
    id: 5,
    src: Song5,
    title: "Red",
    thumbnail: Image5,
  },
];
export const AudioSettings = {
  controls: true,
  loop: true,
  autoplay: false,
  muted: false,
  preload: "metadata",
};
export const sliderSettings = {
  arrows: false,
  // dots: true,
  slidesToScroll: 2,
  slidesToShow: 3,
  focusOnselect: true,
  accessability: true,
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 4000,
  cssEase: "linear",
};
