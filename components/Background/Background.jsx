import React, { useContext,useEffect,useState } from 'react'
import style from './Background.module.scss'
import {motion} from 'framer-motion'
import { StoreContext } from 'store/StoreProvider'


const Background = ({bgImage, isAnimated ,bgImagePh}) => {
   const {transition,positionX,positionY,animationElement} = useContext(StoreContext)
   const [isAnimationEnd, setIsAnimationEnd] = useState(false)
   const [imageSrc,setImageSrc] = useState(bgImagePh)
   const currentTrans = { duration: 2, ease: [0.6, 0.01, -0.05, 0.9]}

   useEffect(()=>{
      if(isAnimationEnd){
         console.log(isAnimationEnd);
         setImageSrc(bgImage)
      }
      
   },[isAnimationEnd])
   const handeEndAnimation = () =>{
      setIsAnimationEnd(true)
      console.log(isAnimationEnd);
      console.log('ended');
   }

   if(isAnimated){
      return (
         <motion.div
                     initial={{
                        x:positionX+125,
                        y:positionY,
                        width:animationElement.width,
                        height:animationElement.height,
                        zIndex:10
                     }}
                     animate={{
                        x:0,
                        y:0,
                        top:0,
                        left:0,
                        width:'calc(100vw - 15px)',
                        height:700,
                        position:'absolute',
                        transition:{
                           duration:1,
                           delay:0.2} 
                     }}
                     
                     changeBackground={isAnimationEnd} onAnimationComplete={handeEndAnimation}
                     className={style.background} >
                         <div className={style['background-image-wrapper']}>
                              <motion.div 
                                 initial={{opacity:0}}
                                 animate={{opacity:1}}
                                 transition={{
                                    duration:0.6,
                                    delay:1
                                 }}
                              className={style['background-shadow']}></motion.div>
               <motion.img 
                  initial={{
                     width:700,
                     height:'auto',
                     x:-20
                  }}
               
                  animate={{
                     width:'100vw',
                     height:'auto',
                     x:0,
                     transition:{
                        duration:1,
                        delay:0.2}
                     }}
                  src={imageSrc} 
               // width="1400" 
               // height="730"
               />
            </div>
         </motion.div>
      )
   }else{
      return (
         <motion.div 
               initial={{opacity:0}}
               animate={{opacity:1,position:'absolute',top:0,left:0}}
               transition={{duration:0.6}}
               exit={{opacity:0}}
         
         className={style.background} >
                  <div className={style['background-image-wrapper']}>
                  <div className={style['background-shadow']}></div>
               <img 
               src={bgImage} 
               width="100%" 
               height="730"
               />
            </div>
         </motion.div>
      )
   }

  
}

export default Background
