import styled from 'styled-components';

export const HomeSection = styled.div`
  padding: 20px;
  width: 90%;
  height: 100%;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    color: #2c2c2c;
  }
`;
export const MusicImg = styled.img`
  width: 50vw;
  height:180px;
  border-radius: 10px;
`;
export const Line = styled.hr`
  height: 4px;
  width:45vw;
  margin-top:5px;
  color: #686262;
`;
export const TracksWrap = styled.div`
  margin-top:5px;
  width: 60vw;
  height:1000px;
  display:flex;
  justify-content: center;
  overflow: auto;
`