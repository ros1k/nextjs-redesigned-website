import React, { useEffect, useState } from 'react'

import style from './SingleSection.module.scss'
import classnames from "classnames";

const SingleSection = ({side,url,description,title}) => {
  
   if(side){
      return (
         <> 
            <section className={classnames(style.description,{
                           [style.left]: true
               })}>
                  <div className={style['description-content']}>
                     <h2>{title}</h2>
                     <p>{description}</p>
                  </div>
                  <div className={style['description-image']}>
                     <img src={url}alt=""/>
                  </div>
               </section>
         </>
      )
   }else{
      return (
         <> 
            <section className={classnames(style.description,{
                           [style.right]: true
               })}>
                  <div className={style['description-content']}>
                     <h2>{title}</h2>
                     <p>{description}</p>
                  </div>
                  <div className={style['description-image']}>
                     <img src={url}alt=""/>
                  </div>
               </section>
         </>
      )
   }
  
}

export default SingleSection
