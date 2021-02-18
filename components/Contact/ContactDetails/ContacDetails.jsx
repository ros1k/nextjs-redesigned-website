import React from 'react'
import style from './ContactDetails.module.scss'

const ContacDetails = () => {
   return (
      <div className={style['contact-details']}>
         <div className={style['contact-details-item']}>
            <a href="tel:+48515553646" >+48 515 553 646</a>
         </div>
         <div className={style['contact-details-item']}>
            <a href="mailto:rosa.damian@gmail.com" >rosa.damian@gmail.com</a>
         </div>
      </div>
   )
}

export default ContacDetails
