import React from 'react'
import { createGlobalStyle, styled } from 'styled-components'
import Main from './Components/Main'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import { DataArray, Video, Videotwo } from './Components/Data/Data'
import Parralex from './Components/Parralex'



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
    <Main Video={Video} DataArray={DataArray} />
    <Main Video={Videotwo} DataArray={DataArray} />
   <SectionOne /> 
   <SectionOne bg='true' /> 
   <Parralex />
  </Container>

    )
}

export default App