import React,{useContext} from 'react'
import { StoreContext } from 'store/StoreProvider'
import style from './Contact.module.scss'
import ContacDetails from './ContactDetails/ContacDetails'
import ContactForm from './ContactForm/ContactForm'
import ParallaxWrapper from 'helpers/FramerMotion/ParallaxWrapper'



const Contact = () => {
   const {images} = useContext(StoreContext)
   

   return (
      <div className={style['section-contact']}>
         <div className={style['box-line-left']}></div>
         <div className={style['box-line-right']}></div>
         {/* <div className={style['section-contact-bg']}>
           {images? <img src={images[1].obrazki[0].url} alt="world map background"/>:null}
         </div> */}
         <div className={style['section-contact__header']}>
            <ParallaxWrapper customNumbers={[1, 0.89]}>
               <div className={style['section-contact__header__bg-text']}>
                     contact
               </div>
            </ParallaxWrapper>
            <h2 className={style['section-contact__title']}>Lets create something <span className="--green"> togheter</span></h2>
         </div>
         <div className={style['section-contact-content']}>
           
            <ContacDetails/>
            <ContactForm />
         </div>
      </div>
   )
}

export default Contact

