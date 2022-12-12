import React from 'react'
import styled from 'styled-components'
export default function Movie({popular}) {
  return (
    <Moviestyle >
      {popular.map((item)=>{
        return(
            <div className="item" key={item.id}>
                <h3 className='title'>{item.title}</h3>
                <div className="img">
                <img className='image' src={'https://image.tmdb.org/t/p/w300'+ item.backdrop_path} alt="" />
                <div className="overview">
                    <h4>overview</h4>
                <p>{item.overview}</p>
                </div>
                </div>
                
            </div>
        )
      })}
    </Moviestyle>
  )
}
const Moviestyle = styled.div`
width: 80%;
margin: auto;
margin-top:5rem;
padding-top: 1rem;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 2rem;
padding-bottom: 3rem;
.img{
    width: 300px;
    height: 200px;
   overflow: hidden;
   border-radius: 20px;
  position: relative;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}
.overview{
    background-color: #fff;
    position: absolute;
    padding: 1.1rem;
    height: 200px;
    font-size: 12px;
    top: 10%;
    transform: translateY(200%);
    transition: all 1.3s ease;
    p{
        font-weight:lighter;
    }

}
.img:hover .overview{
      transition: all 1.3s ease;
        transform: translateY(0%);

    }
.image{
    width: 100%;
    border-radius: 20px;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.5s ease-in;
    &:hover{
        transform: scale(1.3);
    }
}
.title{
    text-align: center;
    font-weight: 300;
    margin-bottom: 1rem;
}
`
