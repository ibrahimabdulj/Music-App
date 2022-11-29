import styled from "styled-components";
// import slider from "react-slick/lib/slider";

export const NowPlayingSection = styled.div`
  padding: 20px;
  width: 90%;
  height: 100%;
  background: url("https://th.bing.com/th/id/R.16e3e3ceb57fa944e6cb5b9b4698da42?rik=%2b4eigFq9GAUzww&pid=ImgRaw&r=0");
  border-radius: 20px;
  color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Head = styled.header`
  width: 20vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: space-between;
  margin-left: 40vw;
  margin-bottom: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #969e96f8;
  font-size: 12px;
`;

export const AddCompo = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
  background: #d4cfcf;
`;

export const MusicDisplays = styled.div`
  width: 85%;
  height: 20%;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
`;

export const TrackDisplayWrapper = styled.div`
  width: 95%;
  height: 70%;
  border: 5px solid black;
  overflow: hidden; 
  border-radius: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
  }
`;
export const CurrentPlayImgWrap = styled.div`
  width: 200px;
  height: 600px;
  margin-top: 30px;
  border-radius:2px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CurrentPlayImg = styled.img`
  width: 150px;
  background-repeat: no-repeat;
  position: center;
  background-attachment: fixed;
`;
