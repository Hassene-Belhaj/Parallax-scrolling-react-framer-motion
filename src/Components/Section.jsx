import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100vh;
color: #fff;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
p{
    display: flex ;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
}
`


const Section = () => {
  return (
  <Container>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi debitis similique ut nisi nostrum? Optio, quod voluptatum iure temporibus atque dolorem possimus consequuntur nemo quidem accusamus maxime velit nam consectetur quis aut eveniet eligendi a fuga nulla magnam numquam pariatur quasi officiis molestias! Debitis dolores quisquam quae quibusdam. Eligendi?</p>
  </Container>
    )
}

export default Section