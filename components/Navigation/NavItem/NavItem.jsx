import React, { useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import style from './NavItem.module.scss'
import {motion} from 'framer-motion'
import { StoreContext } from 'store/StoreProvider'

const NavItem = ({name,urlSlug,custom,setDelay}) => {
  
   
   const items = {
      initial: { 
         y: -100, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
         delay: custom * 0.3,
       },
      }
    }
  
   return (
      <motion.li 
         className={style['nav-item']} 
         
         initial={{y: -100, opacity: 0}}
         animate={{
            y: 0,
            opacity: 1,
            transition: {
             delay: setDelay?(custom+setDelay) * 0.25:custom * 0.25,
           },
          }}>
         <Link  className={style['nav-item','link']} href={urlSlug?`/${urlSlug}`:`/`} >
            <a >{name} </a>
            </Link>
      </motion.li>
   )
}

export default NavItem