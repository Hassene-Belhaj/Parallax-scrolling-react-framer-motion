import React from 'react'
import { createGlobalStyle, styled } from 'styled-components'
import Main from './Components/Main'
import Section from './Components/Section'
import SectionTwo from './Components/SectionTwo'



const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body{
  scroll-behavior: smooth;
}
`
const Container = styled.div`
width: 100%;
height: 100%;
`



const App = () => {
  return (
  <Container>
    <GlobalStyle />
    <Main />
   <Section /> 
  </Container>

    )
}

export default App