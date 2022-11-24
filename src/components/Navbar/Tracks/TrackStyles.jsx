import styled from 'styled-components';


export const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  font-size: 2rem;
  /* border: 2px solid red; */
  :hover {
    background: #cac8c8;
    cursor: pointer;
  }
  /* :isactive {
    background: #cac8c8;
  } */
`;
export const Image = styled.img`
  width:40px;
  height:40px;
  border-radius: 5px;
`;
export const Title = styled.div`
  margin-left: -20vw;
`;
export const Suggestion = styled.div`
  display: flex;
  gap: 15px;
`
export const AddTolikesIcon = styled.button`
  border: none;
  background: none;
  font-size: 1.6rem;
  :hover {
    background: white;
  }
`;
export const OptionsIcon = styled.button`
  border: none;
  background: none;
  font-size: 1.6rem;
  :hover {
    background: white;
  }
`; 