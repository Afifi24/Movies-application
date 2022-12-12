import React from 'react'
import Button from "../Components/Button";
import Movie from "../Components/movie";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function HomePage({popular,filtermovie,setFiltermovie,genre,setGenre,setPopular}) {
  return (
    <div>
      <Button popular={popular} setPopular={setPopular} genre={genre} setGenre={setGenre} setFiltermovie={setFiltermovie}/>
      <Movie popular={popular} filtermovie={filtermovie} setFiltermovie={setFiltermovie}/>
      <Line/>
      <Footer/>
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