import React,{useEffect, useState} from 'react'
import style from './ContactForm.module.scss'
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com';

const ContactForm = () => {
   const [messageState,setMessageState] = useState(null);
   const [animationState, setAnimationState] = useState({opacity:0,y:10})
   useEffect(()=>{
      if(messageState === true  || messageState  === false) {
         setAnimationState({
            opacity:1,
            y:0,
            tranisiton:{
               duration:0.5,
               delay:0.2,
            }
         })
      }
     
   },[messageState])
   const sendEmail = (e) =>{
      e.preventDefault();
      // emailjs.sendForm(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, e.target, process.env.EMAILJS_USER)
       emailjs.sendForm(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, e.target, process.env.EMAILJS_USER)
        .then((result) => {
            console.log(result.text);
            result.text === 'OK' ? setMessageState(true) : setMessageState(false);
            console.log(messageState);
        }, (error) => {
            setMessageState(false);
            console.log(error.text);
        });
   }
   return (
      <form className={style['contact-form']} name="contact" onSubmit={sendEmail}>
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
               <motion.button 
                  whileHover={{
                     y:-3,
                     x:2
                  }}

                  type="submit" >Send</motion.button>
            </p>
            <motion.p className={
               messageState === true?style['contact-form-details__message-state--send']:
               messageState === false?style['contact-form-details__message-state--error']:
               style['contact-form-details__message-state']} 
            initial={{
              
               opacity:0,
               y:10,
            }}
            animate={animationState}>
               {messageState === null ? "" : 
               messageState === true? 'Your message was sent succesfuly':
               messageState === false? 'Ops something went wrong try again later':null}
            </motion.p>
        </div>
        
    </form>    
   )
}

export default ContactForm