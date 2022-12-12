import React from 'react'
import Button from "../Components/Button";
import Movie from "../Components/movie";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function HomePage({popular}) {
  return (
    <div>
        {/* <Link to='/'> */}
      <Button/>
      <Movie popular={popular}/>
      <Line/>
      <Footer/>
      {/* </Link> */}
    </div>
  )
}
const Line = styled.div`
width: 80%;
margin: auto;
height: 1px;
background-color: #777;
margin-top: 2rem;
`