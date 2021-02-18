import React,{useContext,useState, useRef,useEffect} from 'react'
import style from './Navigation.module.scss'
import NavItem from './NavItem/NavItem'
import Link from 'next/link'
import Image from 'next/image'
import { StoreContext } from 'store/StoreProvider'
import {motion} from 'framer-motion'

const Navigation = ({delay}) => {
   const {navItems,isMobile,images} = useContext(StoreContext)
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
   console.log(images);
   return (
      <motion.nav 
         initial={{
            y:-100
         }}
         animate={{
            y:0,
            transition:{
               delay:1,
               ease:'easeInOut'
            }
         }}
         
         exit={{y:-100}}
         className={style.navigation} ref={navigationRef}>
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
                        transition={{ ease: "easeOut", duration: 1.5,delay: delay?delay*0.25:0.6 }}   
                        animate={{
                           opacity:1,
                           x:0,
                        }}
                        href="/">
                           <img src={images?images[4].obrazki[0]:null} alt="logo" width="113" height="53"/>
                        </motion.a>
                     </Link>
                  
                     <motion.ul
                        initial='initial'
                        animate={isMobile? 'mobileAnimate': 'desktopAnimate'}
                        variants={variants}
                        className={style['main-navigation-list']}>
                        {navItems? navItems.navigations.map((elem,key) => {
                           return (<NavItem  key={elem.id} {...elem} custom={key} setDelay={delay}/>
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





export default Navigation