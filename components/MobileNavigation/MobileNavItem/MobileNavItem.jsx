import React, { useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import style from './MobileNavItem.module.scss'
import {motion} from 'framer-motion'
import { StoreContext } from 'store/StoreProvider'

const NavItem = ({name,urlSlug,custom,setDelay,icon}) => {
  
   
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
            <a ><img src={icon.url}/> {name} </a>
            </Link>
      </motion.li>
   )
}

export default NavItem