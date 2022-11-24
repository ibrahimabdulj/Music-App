import styled from 'styled-components'
export const Controls = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  background: #2d2c2d;
  margin-bottom: 10px;
`;
export const AudioSource = styled.audio``;
export const ForwardBackward = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-family: monospace;
  font-size: 18px;
  margin: 10px;
  cursor: pointer;
  color: white;
  :hover {
    color: #f87878;
  }
`;
export const PlayPause = styled.button`
  background: #f87878;
  border: none;
  border-radius: 50%;
  width: 3vw;
  height: 4vh;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    border: 1px solid blue;
    border-radius: 50%;
  }
`;
export const CurrentTime = styled.div`
  font-family: monospace;
  font-size: 18px;
  margin-left: 25px;
`;
export const Duration = styled.div`
  font-family: monospace;
  font-size: 18px;
`;
export const Input = styled.input`
  --seek-before-width: 0;
  appearance: none;
  background-color: lightpink;
  border-radius: 10px;
  position: relative;
  width: 90%;
  height: 5px;
  outline: none;
  color: black;
  ::before {
    content: "";
    height: 5px;
    width: var(--seek-before-width);
    background-color: #4e4043;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    cursor: pointer;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    background-color: #090909;
    cursor: pointer;
    position: relative;
    margin-top: -2px;
    z-index: 3;
    box-sizing: border-box;
  }
  :active::-webkit-slider-thumb {
    transform: scale(1, 1.5);
    background: #2c2f30;
  }
`;
