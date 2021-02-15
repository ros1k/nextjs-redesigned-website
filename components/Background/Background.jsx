import React from 'react'
import style from './Background.module.scss'
const Background = (bgImage) => {
   
   return (
      <div className={style.background} style={{position:"absolute",top:0,left:-1}}>
         <img src={bgImage.bgImage} width="1400" height="730"/>
      </div>
   )
}

export default Background
