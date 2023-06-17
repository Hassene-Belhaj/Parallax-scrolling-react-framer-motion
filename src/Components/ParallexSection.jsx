import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Container = styled.div`
width: 100%;
height: 100vh;
position: absolute;
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background:rgba(238, 130, 238,0.1);
p{
    width: 50%;
    text-align: center;
    }
h3{
    width: 50%;
    text-align: center;
    font-size: 2rem;
    margin: 2rem 0;
}    

`

const ParallexSection = () => {
    const {inView,ref} = useInView()
    const animation = useAnimation()

    useEffect(()=>{
    if(inView) {
    animation.start('visible')
    } else {
    animation.start('hidden')
    }
    },[inView])


  return (
   
<Container ref={ref}>   
   

       <motion.h3 variants={{
             hidden : {opacity : 0 , y : 300},
             visible: {opacity : 1 , y : 0}    
            }}
            animate={animation}
            transition={{
                duration : 0.8 ,
            }}>Lorem Ipsum lorem</motion.h3> 
      <motion.p 
         variants={{
            hidden : {opacity : 0 , y : 300},
            visible: {opacity : 1 , y : 0}    
           }}
           animate={animation}
           transition={{
               duration : 0.8 ,
           }}
            
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi unde ipsam rerum nisi veritatis, magnam nobis exercitationem, sapiente ratione ad quasi hic, deleniti debitis illo totam dolores error consequatur voluptates consequuntur vero placeat suscipit. Libero animi dolorem necessitatibus illum officia quasi! Sint hic iusto veritatis explicabo praesentium. Quasi, sapiente.</motion.p>
</Container>
          
     )
}

export default ParallexSection