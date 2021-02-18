import React,{useContext,useState, useRef,useEffect} from 'react'
import style from './MobileNavigation.module.scss'
import MobileNavItem from './MobileNavItem/MobileNavItem'
import Link from 'next/link'
import Image from 'next/image'
import { StoreContext } from 'store/StoreProvider'
import {motion} from 'framer-motion'

const MobileNavigation = ({delay}) => {
   const {navItems,isMobile} = useContext(StoreContext)
   const [isScrolling, setIsScrolling] = useState(false);
   const navigationRef = useRef()
   const handleScroll = () =>{
    
      // if(navigationRef.current.offsetTop > 0){
      //    navigationRef.current.classList.add('nav-scroll')
      // }else{
      //     navigationRef.current.classList.remove('nav-scroll')
      // }
     
   }
   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      setIsScrolling(true)
      return () => {
         window.removeEventListener('scroll', handleScroll);
      }
   }, [isScrolling])
   const variants = {
      Initial:{

      } ,
      desktopAnimate:{

      } ,
      mobileAnimate: {
         position:'absolute',
         bottom:'-100%'
      }
    
    
   }
   
   return (
      <motion.nav 
         initial={{
            y:100
         }}
         animate={{
            y:0,
            transition:{
               delay:1,
               ease:'easeInOut'
            }
         }}
         
         exit={{y:100}}
         className={style['mobile-navigation']} ref={navigationRef}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className={style['mobile-main-navigation']}>               
                     <motion.ul
                        initial='initial'
                        animate={isMobile? 'mobileAnimate': 'desktopAnimate'}
                        variants={variants}
                        className={style['mobile-main-navigation-list']}>
                        {navItems? navItems.navigations.map((elem,key) => {
                           return (<MobileNavItem  key={elem.id} {...elem} custom={key} setDelay={delay}/>
                             )
                        }): null}
                     </motion.ul>
                  </div>
               
               </div>
            </div>
         </div>
      </motion.nav>
      
   )
}





export default MobileNavigation