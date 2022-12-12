import React from 'react'
import styled from 'styled-components'
export default function Signup() {
  return (
    <Sinup>
      <form action="https://formspree.io/f/xzbwnywv" className='form' method="POST">
      <div className="email">
      <label className='label' htmlFor="">Email</label>
        <input type="email" name="Name" placeholder='john@example.com' required/>
      </div>
       <div className="password">
       <label htmlFor="">Password</label>
        <input type="password" name="Password" placeholder='*******' required/>
       </div>
        <input className='btn' type="submit" value="Sign In" />

      </form>
    </Sinup>
  )
}

const Sinup = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-end;
padding-bottom: 2rem;
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    justify-content: space-around;
    padding: 2rem 1rem;
    width: 300px;
    height: 50vh;
    border-radius: 1rem;
    padding-left: 4rem;
    /* border: 1px solid #777 ; */

    input{
        width: 80%;
        height: 2.5rem;
        padding: 0rem 0.5rem;
    }
    label{
      margin-bottom: 0.5rem;
    }
    .btn{
        width: 86.5%;
        margin-top: 1rem;
        cursor: pointer;
        background-color: #076FC6;
        border: none;
        color: #fff;
        height: 2.8rem;
       &:hover{
        transform: scale(0.98);
       }
       
    }
}

`
