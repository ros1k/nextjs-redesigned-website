import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import style from './SinglePortfolio.module.scss'
import {motion} from 'framer-motion'

import { StoreContext } from 'store/StoreProvider'

const SinglePortfolio = ({company,pageImage,imagePlaceholder,website,isPageOnline,counter}) => {
   const {images,setPositionY,setPositionX,setAnimationElement} = useContext(StoreContext)
 
   const itemRef = useRef()
   const containerRef = useRef()

   const transition = {duration:0.6, ease:[0.43, 0.13, 0.23, 0.96]}
   const handleClick = (e) =>{
         if(itemRef){
            setPositionX(itemRef.current.getBoundingClientRect().x)
            setPositionY(itemRef.current.getBoundingClientRect().y)
         }
         if(containerRef){
            setAnimationElement(
               {
                  width:containerRef.current.getBoundingClientRect().width,
                  height:containerRef.current.getBoundingClientRect().height,
               })
         }    
   }
 
   return (
         <motion.div 
         initial={{x:0,y:0}}
         whileHover={{ y:-20 }}
         transition={transition,{
            delay:counter<4? `0.${counter}`: 0.1
         }}
         animate={{
            x:0,y:0
         }}
         exit={{
            x:0,
            y:20,
            position:'absolute',
            top:0,
            left:0,
         }}   
         ref={containerRef}
        
         className={style['single-portfolio']}>
             <div 
                  //transition={transition}
                  className={style["single-portfolio-image-wrapper"]}>
                  <img src={imagePlaceholder.url} alt={website} ref={ itemRef }/>
             </div>
             <motion.div exit={{opacity:0}} transition={transition} initial={{opacity:0}} animate={{opacity:1}} 
             className={style['single-portfolio-content']}>
                  <h3 className={style['single-portfolio-content__title']}>
                     {website}
                  </h3>
                  <div exit={{opacity:0}} transition={transition} initial={{opacity:0}} animate={{opacity:1}} 
                  className={style['single-portfolio-content-links']}>
                     <Link href={`/portfolio/${company}`} >
                        <motion.a whileHover={{scale:1.15}} onClick={handleClick}><img  src={images[3].obrazki[0].url} alt=""/></motion.a>
                     </Link>
                  </div>
                  <span className={style['single-portfolio-content__category']}>motoryzacja</span>

             </motion.div>
         </motion.div>
   )
}

export default SinglePortfolio
