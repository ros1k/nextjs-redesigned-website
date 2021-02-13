import React from 'react'
import style from './ContactForm.module.scss'

const ContactForm = () => {
   return (
      <form className={style['contact-form']} name="contact" method="POST">
         <div className={style['contact-form-details']}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
            
               <label htmlFor="yourname">
                  Your Name:
               </label> 
               <input type="text" name="name" id="yourname" placeholder='Name'/>
            </p>
            <p>
               <label htmlFor="youremail">
               Your Email:
               </label> 
               <input type="email" name="email" id="youremail" placeholder='Email' />
            </p>
         </div>
         <div className={style['contact-form-message']}>
            <p>
               <label htmlFor="yourmessage">
                  Message:
               </label> 
               <textarea name="message" id="yourmessage" placeholder='Message'></textarea>
            </p>
         </div>
         <div className={style['contact-form-send']}>
            <p>
               <button type="submit">Send</button>
            </p>
        </div>
        
    </form>    
   )
}

export default ContactForm