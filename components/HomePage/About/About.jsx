
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from 'store/StoreProvider'
import style from './About.module.scss'
import Skill from './Skill/Skill'
import {motion,useViewportScroll, useAnimation , useTransform, useMotionValue} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import ParallaxWrapper from 'helpers/FramerMotion/ParallaxWrapper'


const About = () => {
   const {skills,images, info} = useContext(StoreContext);
   const y = useMotionValue(0)
   const textY = useTransform(y, value => value / 3);
  

   const { scrollYProgress } = useViewportScroll()

 
   return (
      <div id="about" className={style['section-about']}>
         {/* <div className={style['box-line-left']}></div>
         <div className={style['box-line-right']}></div> */}
         <div className={style['section-about__header']}>
            <FadeInWhenVisible delay={0.1} >
               <h2 className={style['section-about__title']}>about <span className="--green">me</span></h2>
            </FadeInWhenVisible>
         </div>
         <ParallaxWrapper customNumbers={[0.3, -0.1]}>
               <div className={style['section-about-content__bg-text']}>
                     about
               </div>
               </ParallaxWrapper>
         <div className={style['section-about-content']}>
            
            <FadeInWhenVisible delay={0.4}>
               <div className={style['section-about-content-left']}>
                  <h3 className={style['section-about-content__title']}>coding challanging projects<br/> is fun<span className="--green">.</span></h3>
                  <p className={style['section-about-content__text']}>
                     {info && info[0].description}
                  </p>
               </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.7}>
            <div className={style['section-about-content-middle']}>
               <h3 className={style['section-about-content__title']}>i worked with<span className="--green">:</span></h3>
               <ul className={style['section-about-content-list']}>
                  {skills? skills.map((values,key)=> {
                     return <Skill key={key} customValue={key} {...values}/>
                  }): null }
               </ul>
            </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={1}>
            <div className={style['section-about-content-right']}>
               <div className={style['section-about-content-image-wrapper']}>
                  {images ? <img src={images[0].obrazki[0].url} layout="fill" loading="lazy"/> :null }
               </div>
            </div>
            </FadeInWhenVisible>
         </div>
      </div>
   )
}

function FadeInWhenVisible({ children,duration,delay }) {
   const controls = useAnimation();
   const [ref, inView] = useInView();
   const [currentDuration,setCurrentDuration] = useState(0.7)
   const [currentDelay,setCurrentDelay] = useState(0)
   
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
         visible: { y:0, opacity:1 },
         hidden: { y:50, opacity:0, }
       }}
     >
       {children}
     </motion.div>
   );
 }
export default About
