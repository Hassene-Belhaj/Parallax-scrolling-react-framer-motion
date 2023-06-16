import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { motion,useScroll,useTransform } from 'framer-motion'




const Container = styled(motion.div)`
width: 100%;
height: 100vh;
background: #000;
position: relative;
z-index: 0;
` 

const VideoContainer = styled(motion.div)`
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
const ColumnContainer = styled.div`
position: absolute;
inset: 0;
gap: 4rem;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
color: #fff;
z-index: 100;
h2{
    text-transform:capitalize;
    font-size: 2rem;
}
@media screen and (max-width : 768px){
    display: block;
}
`

const LeftColumn = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width : 768px){
    display: block;
    padding-top: 5rem;
    width: 100%;
    height: 50%;
}
h2{
    font-size:4rem;
}
`
const RightColumn = styled.div`
width: 30%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width : 768px){
    display: block;
    padding-top: 5rem;
    width: 100%;
    height: 50%;
}
`
const SectionContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
padding: 0 5rem;
width: 100%;
height: 100vh;
/* background:rgba(255, 0, 0,0.1); */
color: #fff;
z-index: 10;
`





const Main = () => {
 const ref = useRef(null)   
 const {scrollYProgress} = useScroll({
    target : ref ,
    offset : ['start start' , 'end start']
 }) 

 const width = useTransform(scrollYProgress , [0,1] , ['0%', '100%'])

  return (


    <Container  ref={ref}>
        <VideoContainer style={{y:width}}  >
              <Opacity></Opacity>
                <video src="video.mp4" type='video/mp4' autoPlay loop muted></video>
        </VideoContainer>
        <ColumnContainer  >
            <LeftColumn >
                    <h2>learn how to build modern user interfaces for the web</h2>                
            </LeftColumn>
            <RightColumn>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, facilis! Explicabo ullam labore laborum tenetur provident ipsam molestias id veritatis earum quas impedit repellendus, delectus iste corrupti? Reiciendis iure obcaecati, rerum, non impedit ipsum expedita iusto aliquid officia quae ullam?</p>
            </RightColumn>
        </ColumnContainer>
        
    </Container>

    
        
  
    )
}

export default Main


