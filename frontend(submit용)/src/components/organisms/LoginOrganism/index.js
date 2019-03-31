//import React, { PropTypes } from 'react'
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'
import Meeting from '../../atoms/Meeting'


const Wrapper = styled.div`
  color: ${palette('grayscale', 0)};
  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
`
const TomatoButton = styled.button`
  color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  cursor: pointer;
`;


export const LoginOrganism = ({state, onLoginRequest, onLogoutRequest, onPostRequest, onDeleteRequest}) => {
  let uid, upwd, sinceWhen, tilWhen
  console.log(state.meeting)

  if(state.meeting.username == null) {
    return (
          <div>
            <div>
              <div>
              <h2>Id</h2>
              <input id="username_field" ref={node => {uid = node;}}/>
              </div>
              <div>
              <h2>Password</h2>
              <input id="password_field" ref={node => {upwd = node;}}/>
              </div>
            </div>
            <br></br>
            <Button type="submit" onClick={() => onLoginRequest(uid.value, upwd.value)}>login</Button>
          </div>
        )
    }
    else {
      let arr = JSON.parse(state.meeting.mlist)
      return (
          <Wrapper>
            <h2> Username: {state.meeting.username}</h2>
            <Button type="submit" onClick={() => onLogoutRequest()}>Logout</Button>
            <div>
               {arr.map(element =>
                 <div key = {element.id}>
                 <Meeting  {...element}/>
                 <TomatoButton type = "submit" onClick={() => onDeleteRequest(element.id)}>Delete</TomatoButton>
                 </div>
                  )}
            </div>
            <div>
              <h2>sinceWhen</h2>
              <input type="datetime-local" ref={node => {sinceWhen=node;}} />
              <h2>tilWhen</h2>
              <input type="datetime-local" ref={node => {tilWhen=node;}} /> &nbsp;
              <Button type="submit" onClick={() => onPostRequest(sinceWhen.value, tilWhen.value)}>POST</Button>
            </div>
          </Wrapper>
        )
    }
}

LoginOrganism.propTypes = {
  reverse: PropTypes.bool,
}

export default LoginOrganism
