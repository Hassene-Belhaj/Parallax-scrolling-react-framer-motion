import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { motion , useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const Container = styled.div`
width: 100%;
height: 100vh;
color: ${({bg})=>bg ?  "#fff":"#000" };
background: ${({bg})=>bg ? "#000" : "#fff"};
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


const SectionOne = ({bg}) => {
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
  <Container bg={bg} ref={ref}>
    <motion.p
     variants={{
      hidden : {opacity : 0 , y : 300},
      visible: {opacity : 1 , y : 0}    
     }}
     animate={animation}
     transition={{
         duration : 0.8 ,
     }}
    
    
    
    >Section Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi debitis similique ut nisi nostrum? Optio, quod voluptatum iure temporibus atque dolorem possimus consequuntur nemo quidem accusamus maxime velit nam consectetur quis aut eveniet eligendi a fuga nulla magnam numquam pariatur quasi officiis molestias! Debitis dolores quisquam quae quibusdam. Eligendi?</motion.p>
  </Container>
    )
}

export default SectionOne