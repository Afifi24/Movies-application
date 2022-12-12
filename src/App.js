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
 useEffect(()=>{
  fetchmovie()

 },[])
 const fetchmovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=13aa08f7158e98f3eaf67a36b6c14e0a&language=en-US&page=1')
  const movie =await data.json()
  setPopular(movie.results)
}
 console.log(popular)

  return (
    <div className="App">
      <Header/>
     <Globastyle/>
     {/* <HomePage popular={popular}/> */}
      <Routes>
    <Route  path='/sign-up' element={<Signup/> }/>
    <Route  path='/sign-in' element={ <Signin/>}/>
    <Route  path='/' element={ <HomePage popular={popular}/> }/>
     </Routes>
      {/* <Button/>
     <Movie popular={popular}/>
      
      <Footer/> */}
    </div>
  );
}

export default App;

