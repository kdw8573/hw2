import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.span`
  display: inline-block;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  border: 2px solid palevioletred;

`

const Meeting = ({ id, created, sinceWhen, tilWhen, user }) => (
  <Styledli>
    &ensp;id : {id}<br/>
    &ensp;created : {created}<br/>
    &ensp;sinceWhen : {sinceWhen}<br/>
    &ensp;tilWhen : {tilWhen}<br/>
    &ensp;user : {user}<br/>
  </Styledli>
)

Meeting.propTypes = {
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  sinceWhen: PropTypes.string.isRequired,
  tilWhen: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}



export default Meeting
