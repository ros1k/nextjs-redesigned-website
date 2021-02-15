
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { StoreContext } from 'store/StoreProvider'
import style from './About.module.scss'
import Skill from './Skill/Skill'
import {motion,useViewportScroll, useAnimation , useTransform, useMotionValue} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import ParallaxWrapper from 'helpers/FramerMotion/ParallaxWrapper'


const About = () => {
   const {skills,images} = useContext(StoreContext);
   const y = useMotionValue(0)
   const textY = useTransform(y, value => value / 3);
  

   const { scrollYProgress } = useViewportScroll()


   return (
      <div className={style['section-about']}>
         <div className={style['box-line-left']}></div>
         <div className={style['box-line-right']}></div>
         <div className={style['section-about__header']}>
            <FadeInWhenVisible>
               <h2 className={style['section-about__title']}>about <span className="--green">me</span></h2>
            </FadeInWhenVisible>
         </div>
         <div className={style['section-about-content']}>
             <ParallaxWrapper customNumbers={[0.3, -0.1]}>
               <div className={style['section-about-content__bg-text']}>
                     about
               </div>
               </ParallaxWrapper>
            <FadeInWhenVisible>
               <div className={style['section-about-content-left']}>
                  <h3 className={style['section-about-content__title']}>coding challanging projects<br/> is fun<span className="--green">.</span></h3>
                  <p className={style['section-about-content__text']}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue et orci euismod hendrerit. Phasellus sollicitudin nisl commodo rutrum efficitur. Ut elementum tincidunt nibh, nec tristique odio interdum vel. Vestibulum nulla odio, tempor id tempus eu, mollis at diam. Pellentesque laoreet pulvinar lectus vel ornare.
                     </p>
               </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <div className={style['section-about-content-middle']}>
               <h3 className={style['section-about-content__title']}>i worked with<span className="--green">:</span></h3>
               <ul className={style['section-about-content-list']}>
                  {skills? skills.map((values,key)=> {
                     return <Skill key={key} {...values}/>
                  }): null }
               </ul>
            </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
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

function FadeInWhenVisible({ children }) {
   const controls = useAnimation();
   const [ref, inView] = useInView();
 
   useEffect(() => {
     if (inView) {
       controls.start("visible");
     }else{
      controls.start("hidden");
    }
   }, [controls, inView]);
 
   return (
     <motion.div
       ref={ref}
       animate={controls}
       initial="hidden"
       transition={{ duration: 0.8 }}
       variants={{
         visible: { opacity: 1, scale: 1 },
         hidden: { opacity: 0, scale: 0 }
       }}
     >
       {children}
     </motion.div>
   );
 }
export default About
