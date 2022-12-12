import React from 'react'
import styled from 'styled-components'
export default function Button() {
  return (
    <Buttonstyle>
      <button>All</button>
      <button>Comedy</button>
      <button>Action</button>
    </Buttonstyle>
  )
}


const Buttonstyle = styled.div`
position: fixed;
top:40%;
left: 0.5%;
display: flex;
align-items: center;
flex-direction: column;
@media(max-width:530px){
position: unset;
z-index: 10;
 flex-direction: row;
 width: 80%;
 margin: auto;
justify-content: space-between;
margin-top:11rem;


}
button{
    width: 90px;
    height: 35px;
    border-radius: 1.3rem;
    border: none;
    margin: 1rem 0rem;
    border: 2px solid #4162A8;
    background-color: transparent;
    cursor: pointer;

   
}
`