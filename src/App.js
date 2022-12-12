import React,{useState,useEffect} from 'react'
import Header from './Components/Header';
import Globastyle from './Globalestyle';
import Button from './Components/Button';
import Movie from './Components/movie';
import Footer from './Components/Footer';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom'
import Signup from './Components/Sign-up';
import Signin from './Components/Sign-in';
import HomePage from './Page/HomePage';
function App() {
 const [popular,setPopular] = useState([])
 const [filtermovie,setFiltermovie] = useState([])
 const [genre,setGenre] = useState(0)
 useEffect(()=>{
  fetchmovie()

 },[])
 const fetchmovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=13aa08f7158e98f3eaf67a36b6c14e0a&language=en-US&page=1')
  const movie =await data.json()
  setPopular(movie.results)
  setFiltermovie(movie.results)
}

  return (
    <div className="App">
      <Header/>
     <Globastyle/>
      <Routes>
    <Route  path='/sign-up' element={<Signup/> }/>
    <Route  path='/sign-in' element={ <Signin/>}/>
    <Route  path='/' element={ <HomePage setPopular={setPopular} popular={popular} filtermovie={filtermovie} setFiltermovie ={setFiltermovie} genre={genre} setGenre={setGenre}/> }/>
     </Routes>
    </div>
  );
}

export default App;

