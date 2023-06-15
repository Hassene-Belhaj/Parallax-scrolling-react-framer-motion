import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100vh;
background: #000;
` 
const VideoContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Opacity = styled.div`
position: absolute;
inset: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.7);
z-index: 1;
`


const Main = () => {
  return (
    <Container>
        <Opacity></Opacity>
        <VideoContainer>
                <video src="video.mp4" type='video/mp4' autoPlay loop muted></video>
        </VideoContainer>
        <Section />
    </Container>

    )
}

export default Main


const Section = () => {
  return (
   <Container>

   </Container>

  )
  


}