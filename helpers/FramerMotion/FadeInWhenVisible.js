import React,{useState,useEffect} from 'react'
import {motion,useViewportScroll, useAnimation , useTransform, useMotionValue} from 'framer-motion'
import { useInView } from "react-intersection-observer";

const FadeInWhenVisible = ({ children,duration,delay,showYposition,hideYposition}) =>{
   const controls = useAnimation();
   const [ref, inView] = useInView();
   const [currentDuration,setCurrentDuration] = useState(0.7)
   const [currentDelay,setCurrentDelay] = useState(0)
   const [showY,setShowY] = useState(50)
   const [hideY,setHideY] = useState(0)
  
   useEffect(() => {
     if (inView) {
       controls.start("visible");
     }else{
      controls.start("hidden");
    }
    duration?setCurrentDuration(duration):null;
    delay?setCurrentDelay(delay):null;
    
   }, [controls, inView]);
 
   return (
     <motion.div
       ref={ref}
       animate={controls}
       initial="hidden"
       transition={{ 
         duration:currentDuration,
         delay:currentDelay
         }}  
       variants={{
         visible: { y:hideY, opacity:1 },
         hidden: { y:showY, opacity:0, }
       }}
     >
       {children}
     </motion.div>
   );
 }

 export default FadeInWhenVisible