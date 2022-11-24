import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    margin: 0px;
    padding: 0px;
  }
  body{
  background: url('https://www.tauntonschool.co.uk/wp-content/uploads/2021/03/shutterstock_Music-Festival.jpg');
  }
  h2{
    width:fit-content;
  }
  .active {
  background: #cac8c8;
}
`;
export const Container = styled.div`
  height: 85vh;
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  margin-top: 5vw;
  background: #060e1d;
  border-radius: 20px;
  display: flex;
`;
export const TrackContainer = styled.div`
  padding: 20px;
  width: 90%;
  height: 100%;
  background: whitesmoke;
  border-radius: 20px;
  color: #2c2c2c;
`;
export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;



export default GlobalStyle;
