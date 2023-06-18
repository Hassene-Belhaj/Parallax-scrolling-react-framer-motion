import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { motion , useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const Container = styled.div`
width: 100%;
height: 100vh;
color: ${({color})=>color ? "#000" :"#fff" };
background: ${({bg})=>bg ? "#000" : "#fff"};
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`

const Div = styled(motion.div)`
width: 80%;
height: 80%;
display: flex;
flex-direction:${({start})=>start ? 'row' : 'row-reverse'};
justify-content: center;
align-items: center;
position: relative;
border-radius: 20px;
p{
  padding: 0 1rem;
  min-width: 50%;
  z-index: 0;
}
img{
  margin: 0 4rem;
  min-width:40%;
  min-height: 80%;
  object-fit: cover;
  border-radius: 20px;
}

@media screen and (max-width : 768px){
display: block;
width: 100%;
img{
  max-width: 100%;
  margin:2rem 0;
  border-radius: 0;

}
}
`
const Opacity = styled.div`
position: absolute;
inset: 0;
background:rgba(106, 90, 205,0.1);
border-radius: 20px;

`




const SectionOne = ({color,bg,start,image}) => {
  const {inView,ref} = useInView()
  const animation = useAnimation()

useEffect(()=>{
  if (inView) {
    animation.start('visible')
  } else {
    animation.start('hidden')
  }
},[inView])


  return (
  <Container color={color ? 1 : 0} bg={bg ? 1 : 0} ref={ref}>
    <Div  start={start ? 1: 0}
    variants={{
       hidden : {opacity : 0 , y : 300},
       visible: {opacity : 1 , y : 0}    
      }}
      animate={animation}
      transition={{
        duration : 0.8 ,
        delay : 0.2
      }}>
    <Opacity></Opacity>  
    <p>
      Section Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi debitis similique ut nisi nostrum? Optio, quod voluptatum iure temporibus atque dolorem possimus consequuntur nemo quidem accusamus maxime velit nam consectetur quis aut eveniet eligendi a fuga nulla magnam numquam pariatur quasi officiis molestias! Debitis dolores quisquam quae quibusdam. Eligendi?
    </p>
     <img src={image} alt="" />
      </Div>
  </Container>
    )
}

export default SectionOne