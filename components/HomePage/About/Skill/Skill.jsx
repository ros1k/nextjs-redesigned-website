
import React, { useEffect } from 'react'
import style from './Skill.module.scss'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";

const Skill = ({skill,skillIcon,customValue}) => {
   const [ref, inView] = useInView();
   const controls = useAnimation();
   useEffect(()=>{
      if (inView) {
         controls.start("visible");
       }else{
        controls.start("hidden");
      }
   },[controls,inView])
   return (
      <motion.li 
         ref={ref}
         initial='hidden'
         animate={controls}
         transition={{ 
            duration:0.5,
            delay:(0.7 + (customValue *0.2)),
            }}  
         variants={{
            visible: { 
               opacity:1,
               y:0, },
            hidden: { 
               opacity:0,
               y:20, }
          }}
         className={style['skill']}>
         <img src={skillIcon.url} alt=""/>
         <p className={style['skill__title']}>
            {skill}
         </p>
      </motion.li>
   )
}

export default Skill
