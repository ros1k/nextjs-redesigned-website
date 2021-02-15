import React,{useContext} from 'react'
import style from './Navigation.module.scss'
import NavItem from './NavItem/NavItem'
import Link from 'next/link'
import Image from 'next/image'
import { StoreContext } from 'store/StoreProvider'
import {motion} from 'framer-motion'

const Navigation = () => {
   const {navItems} = useContext(StoreContext)


   return (
      <nav className={style.navigation}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className={style['main-navigation']}>
                     <Link href="/" scroll={true}>
                        <motion.a 
                        initial={{
                           x:-100,
                           opacity:0,                     
                        }}
                        transition={{ ease: "easeOut", duration: 1.5 }}   
                        animate={{
                           opacity:1,
                           x:0,
                        }}
                        href="/">
                           <Image src="/Damian.svg" alt="logo" width="113" height="53"/>
                        </motion.a>
                     </Link>
                  
                     <ul
                        className={style['main-navigation-list']}>
                        {navItems? navItems.navigations.map((elem,key) => {
                           return (<NavItem  key={elem.id} {...elem} custom={key}/>
                             )
                        }): null}
                     </ul>
                  </div>
               
               </div>
            </div>
         </div>
      </nav>
      
   )
}





export default Navigation