
import React from 'react'
import style from './About.module.scss'
import Skill from './Skill/Skill'


const About = ({skills,images}) => {

   return (
      <div className={style['section-about']}>
         <div className={style['section-about__header']}>
            <h2 className={style['section-about__title']}>about <span className="--green">me</span></h2>
         </div>
         <div className={style['section-about-content']}>
            <div className={style['section-about-content-left']}>
               <h3 className={style['section-about-content__title']}>coding challanging projects<br/> is fun<span className="--green">.</span></h3>
               <p className={style['section-about-content__text']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue et orci euismod hendrerit. Phasellus sollicitudin nisl commodo rutrum efficitur. Ut elementum tincidunt nibh, nec tristique odio interdum vel. Vestibulum nulla odio, tempor id tempus eu, mollis at diam. Pellentesque laoreet pulvinar lectus vel ornare.
                  </p>
            </div>
            <div className={style['section-about-content-middle']}>
               <h3 className={style['section-about-content__title']}>i worked with<span className="--green">:</span></h3>
               <ul className={style['section-about-content-list']}>
                  {skills.map((values,key)=> {
                     return <Skill key={key} {...values}/>
                  })}
               </ul>
            </div>
            <div className={style['section-about-content-right']}>
               <div className={style['section-about-content-image-wrapper']}>
                  <img src={images[0].obrazki[0].url} layout="fill" loading="lazy"/> 
                  
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
