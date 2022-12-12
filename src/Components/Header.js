import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <Headerstyle>
      <nav>
        <div className="logo">
        <Link to='/' className='loggo'>Movies</Link>
          </div>
        <div className="sign">
            <Link to='/sign-in' className='link-item'>Sign In</Link>
            <Link to='/sign-up' className='link-item'>Sign Up</Link>
        </div>
      </nav>
    </Headerstyle>
  )
}

const Headerstyle = styled.div`
min-height: 10vh;
background-color: #fff;
box-shadow: 2px 1px 10px rgba(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
font-family: 'Poppins', sans-serif;
padding: 0.5rem 0rem;
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 10;
nav{
  .loggo{
    text-decoration: none;
    color: #000;
    &:hover{
      color: #4162A8;
    }
  }
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width:530px){
 flex-direction: column;
 padding: 1rem;
}
}
.sign{
  width: 17rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link-item{
      
        text-decoration:none;
        color: #000;
        letter-spacing: 1px;
        font-weight: lighter;
        width: 100px;
        border: 1px solid #4162A8;
        height: 25px;
        text-align: center;
        padding: 0.2rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2rem;
       transition: all 0.5s ease-in-out;
        &:hover{
          color: #fff;
          background-color: #4162A8;

        }
        @media(max-width:530px){
         width: 80px;
         margin-top:2rem;
}
    }
@media(max-width:530){
 
}
`