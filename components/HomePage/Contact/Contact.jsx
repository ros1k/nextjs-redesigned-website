import React,{useContext} from 'react'
import { StoreContext } from 'store/StoreProvider'
import style from './Contact.module.scss'
import ContacDetails from './ContactDetails/ContacDetails'
import ContactForm from './ContactForm/ContactForm'



const Contact = () => {
   const {images} = useContext(StoreContext)
   
   console.log(images);
   return (
      <div className={style['section-contact']}>
         {/* <div className={style['section-contact-bg']}>
           {images? <img src={images[1].obrazki[0].url} alt="world map background"/>:null}
         </div> */}
         <div className={style['section-contact__header']}>
            <h2 className={style['section-contact__title']}>get <span className="--green"> in touch</span></h2>
         </div>
         <div className={style['section-contact-content']}>
            <ContacDetails/>
            <ContactForm />
         </div>
      </div>
   )
}

export default Contact

