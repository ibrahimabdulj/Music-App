import styled from 'styled-components';

export const LogWrap = styled.div`
  /* width: 50vw;
  height: 300px; */
  width: 95%;
  height:L 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c0101;
`;
export const LogBox = styled.div`
  width: 48vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d4d0d0;
  border: 2px solid white;
  gap: 15px;
`; 
export const FormLog = styled.form`
  width: 90%;
  height: 75%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

`;
export const InputName = styled.input`
  width: 100%;
  height: 50px;
  font-size: 1.6rem;
`;
export const Submit = styled.button`
  width: 80%;
  height: 35px;
  border-radius: 20px;
  margin-top: 30px;
  font-size: 1rem;
  :hover {
    background: #0d0d1f;
    color: white;
    font-size: 1.5rem;
  }
`;