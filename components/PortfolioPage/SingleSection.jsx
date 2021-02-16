import React, { useEffect, useState } from 'react'

import style from './SingleSection.module.scss'
import classnames from "classnames";
import ParallaxWrapper from 'helpers/FramerMotion/ParallaxWrapper'
import { Fade } from 'react-bootstrap';
import FadeInWhenVisible from 'helpers/FramerMotion/FadeInWhenVisible';


const SingleSection = ({side,url,description,title}) => {
  
   if(side){
      return (
         <> 
            <section className={classnames(style.description,{
                           [style.left]: true
               })}>
                  <ParallaxWrapper customNumbers={[0.5, -1.1]} setZindex={2}>
                     <FadeInWhenVisible delay={0.3}>
                        <div className={style['description-content']}>
                           <h2>{title}</h2>
                           <p>{description}</p>
                        </div>
                     </FadeInWhenVisible>
                   
                  </ParallaxWrapper>
                  <ParallaxWrapper customNumbers={[0.8, -0.21]}>
                     <FadeInWhenVisible>
                        <div className={style['description-image']}>
                           <img src={url}alt=""/>
                        </div> 
                     </FadeInWhenVisible>
                  </ParallaxWrapper>

               </section>
         </>
      )
   }else{
      return (
         <> 
            <section className={classnames(style.description,{
                           [style.right]: true
               })}>
                 <ParallaxWrapper customNumbers={[0.5, -1.1]} setZindex={2}>
                     <FadeInWhenVisible delay={0.3}>
                        <div className={style['description-content']}>
                           <h2>{title}</h2>
                           <p>{description}</p>
                        </div>
                     </FadeInWhenVisible>
                   
                  </ParallaxWrapper>
                  <ParallaxWrapper customNumbers={[0.8, -0.21]}>
                     <FadeInWhenVisible>
                        <div className={style['description-image']}>
                           <img src={url}alt=""/>
                        </div> 
                     </FadeInWhenVisible>
                  </ParallaxWrapper>
               </section>
         </>
      )
   }
  
}

export default SingleSection
