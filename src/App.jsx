import React from 'react'
import { createGlobalStyle, styled } from 'styled-components'
import Main from './Components/Main'


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
height: 100vh;
`



const App = () => {
  return (
  <Container>
    <GlobalStyle />
    <Main />
  </Container>

    )
}

export default App