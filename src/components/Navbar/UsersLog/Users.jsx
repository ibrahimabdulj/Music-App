import React from 'react'
import { FormLog, InputName, LogBox, LogWrap, Submit } from './UsersStyle';

function Users() {
  return (
    <LogWrap>
      <LogBox>
        <h1>Log in</h1>
        <FormLog>
          Enter Your User Name 
          <InputName type = 'text' />
          Enter Your PassWord 
          <InputName type= 'password'/>
          <Submit>Enter</Submit>
        </FormLog>
      </LogBox>

    </LogWrap>
  )
}

export default Users;