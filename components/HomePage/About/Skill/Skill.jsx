
import React from 'react'
import style from './Skill.module.scss'
const Skill = ({skill,skillIcon}) => {
   return (
      <li className={style['skill']}>
         <img src={skillIcon.url} alt=""/>
         <p className={style['skill__title']}>
            {skill}
         </p>
      </li>
   )
}

export default Skill
