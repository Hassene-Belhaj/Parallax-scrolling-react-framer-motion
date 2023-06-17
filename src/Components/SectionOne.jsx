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
justify-content: center;
align-items: center;
position: relative;
p{
  padding: 0 1rem;
  min-width: 50%;
  order:${({start})=>start ? 1 : 0};
}
img{
  min-width: 50%;
  min-height: 100%;
  object-fit: cover;

}
`
const Opacity = styled.div`
position: absolute;
inset: 0;
background: rgba(0, 255, 171,0.1);

`




const SectionOne = ({color,bg,start}) => {
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
    <Div 
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
    <p  start={start ? 1: 0} >
      Section Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi debitis similique ut nisi nostrum? Optio, quod voluptatum iure temporibus atque dolorem possimus consequuntur nemo quidem accusamus maxime velit nam consectetur quis aut eveniet eligendi a fuga nulla magnam numquam pariatur quasi officiis molestias! Debitis dolores quisquam quae quibusdam. Eligendi?
    </p>
     <img src="/image2.jpg" alt="" />
      </Div>
  </Container>
    )
}

export default SectionOne