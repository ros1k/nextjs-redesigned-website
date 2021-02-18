import React from 'react'
import Link from 'next/link'
import style from './Header.module.scss'
import {motion} from 'framer-motion'
const Header = () => {
   

   return (
      <div className={style['header-wrapper']}>
         <header className={style.header}>
            <motion.h1
            initial={{
               y:50,
               opacity:0,
            }}
            transition={{
               duration:0.5,
               delay:1.3
            }}
            animate={{
               y:0,
               opacity:1
            }}
            >
               Hi<span className="--green">!</span> My name is Damian Rosa
            </motion.h1>
            <motion.h2
             initial={{
               y:50,
               opacity:0,
            }}
            transition={{
               duration:0.5,
               delay:1.5
            }}
            animate={{
               y:0,
               opacity:1
            }}
            >
               and i am a frontend developer<span className="--green">.</span>
            </motion.h2>
            {/* <motion.a
             initial={{
               y:50,
               opacity:0,
            }}
            transition={{
               duration:0.5,
               delay:1.9
            }}
            animate={{
               y:0,
               opacity:1
            }}
            
            href="/">Check more</motion.a> */}
           
           
         </header>
         <div className={style['check-more']}>
            <div className={style['mouse']}></div>
               <p className={style['scroll']}>Scroll down and check more</p>
            </div>
      </div>
   )
}

export default Header
