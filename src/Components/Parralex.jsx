import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
width: 100%;
height: 100vh;
background-image:
linear-gradient(
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.9)),
url('image1.jpg') ;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: #fff;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
`
const TextContainer = styled.div`
width: 50%;
height: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Parralex = () => {
  return (
    <Container>
    <TextContainer>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste non eum odit molestiae ullam doloremque dignissimos omnis voluptatibus? Accusamus at maiores et quisquam porro? Laborum dicta laudantium dolorum maxime corrupti tempora velit eligendi placeat, ex quia deleniti, rerum inventore soluta quos, nemo sapiente dolorem consequatur saepe. Dolorem dolore dolorum ab?</p>
    </TextContainer>
    </Container>
  )
}

export default Parralex