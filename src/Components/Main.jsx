import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { motion,useScroll,useTransform } from 'framer-motion'




const Container = styled(motion.div)`
width: 100%;
height: 100vh;
background: #000;
position: relative;
z-index: 0;
margin-bottom: 100vh;
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
background: rgba(0,0,0,0.9);
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
/* h2{
    font-size:4rem;
} */
@media screen and (max-width : 768px){
    display: block;
    margin: 2rem 2rem;
    width: 90%;
    height: 50%;
    h2{
        font-size:3rem;
    }
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
    margin: 0 2rem;
    /* padding-top: 5rem; */
    width: 90%;
    height: 100%;
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
height: 100%;
background:rgb(238, 130, 238,0.1);
color: #fff;
z-index: 10;
h3{
font-size    : 4rem;
}
p{
    width: 50%;
}
@media screen and (max-width : 768px){
p{
    width: 100%;
}    
}
`





const Main = ({Video,DataArray}) => {
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
                <video src={Video.Video} type='video/mp4' autoPlay loop muted></video>
        </VideoContainer>
        <ColumnContainer  >
            <LeftColumn >
                    <h2>{DataArray[0][0].title}</h2>                
            </LeftColumn>
            <RightColumn>
                    <p>{DataArray[0][1].para}</p>
            </RightColumn>
        </ColumnContainer>
        <SectionContainer>
            <h3>{DataArray[1][0].title}</h3>
            <p>{DataArray[1][1].para}</p>
        </SectionContainer>
        
    </Container>

    
        
  
    )
}

export default Main


