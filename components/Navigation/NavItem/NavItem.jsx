import React from 'react'
import Link from 'next/link'
import style from './NavItem.module.scss'
import {motion} from 'framer-motion'

const NavItem = ({name,urlSlug,custom}) => {
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
    console.log(urlSlug);
   return (
      <motion.li 
         className={style['nav-item']} 
         
         initial={{y: -100, opacity: 0}}
         animate={{
            y: 0,
            opacity: 1,
            transition: {
             delay: custom * 0.25,
           },
          }}>
         <Link className={style['nav-item','link']} href={urlSlug?`${urlSlug}`:`/`}>{name}</Link>
      </motion.li>
   )
}

export default NavItem