import React from 'react';
import {Link} from "react-router-dom"
import { FormLog, InputName, LogBox, LogWrap, Submit } from './UsersStyle';

function Users() {
  // const [userName, setUserName] = useState('')
  // const HandleSubmit =(e)=>{
  //   e.preventDefault()
  //   alert(`${(userName)} "Is currently Logged In"`)
  // };
  return (
    <LogWrap>
      <LogBox>
        <h1>Log in</h1>
        <FormLog>
          Enter Your User Name
          <InputName
            type="text"
            placeholder="Your Name"
            // onChange={(event) => {
            //   setUserName(event.target.value);
            // }}
          />
          Enter Your PassWord
          <InputName type="password" placeholder="Password..." />
          <Link to="/">
            <Submit>Enter</Submit>
          </Link>
        </FormLog>
      </LogBox>
    </LogWrap>
  );
}

export default Users;