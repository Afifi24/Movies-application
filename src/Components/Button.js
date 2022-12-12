import React,{useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
export default function Button({genre,setGenre,setPopular,popular,setFiltermovie}) {
  useEffect(()=>{
    if(genre===0){
      setPopular(popular)
      return;
    }
    const MovieFiltred = popular.filter((movie)=>movie.genre_ids.includes(genre))
    setFiltermovie(MovieFiltred)
  },[genre])
  return (
    <Buttonstyle>
      <motion.button className={genre===0?'active':''}  onClick={()=>setGenre(0)}>All</motion.button>
      <motion.button className={genre===35?'active':''} onClick={()=>setGenre(35)}>Comedy</motion.button>
      <motion.button className={genre===28?'active':''} onClick={()=>setGenre(28)}>Action</motion.button>
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
    background-color: #fff;
    cursor: pointer;
    
   
}
.active{
background-color: rgb(65,98,168);
color: #fff;
transition: 0.4s ease-in;
}
`