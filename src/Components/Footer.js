import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Footerstyle>
    <p><span>&copy;</span> 2022 Afifi Brahim</p>
    <p>Developed and Deployed by Me</p>
    </Footerstyle>
  )
}

const Footerstyle = styled.div`
min-height: 25vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p{
    font-weight: lighter;
}
`