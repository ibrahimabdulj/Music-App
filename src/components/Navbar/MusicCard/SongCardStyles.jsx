import styled from "styled-components";

export const Indivsong = styled.div`
  /* --background: none; */
  background-image: ${(props) =>
    props.background ? `url(${props.background})` : "none"};
  border-radius: 10px;
  background-size: cover;
  background-position: contain;
  background-repeat: no-repeat;
  width: 25%;
  height: 95%;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const AudioSource = styled.audio``;
export const PlayPause = styled.button`
  border: 1px solid white;
  background: none;
  width: 3vw;
  height: 4vh;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    width: 4vw;
    height: 5vh;
    font-size: 20px;
    z-index: 2;
  }
`;
