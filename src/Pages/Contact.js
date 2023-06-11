import { useState, useRef } from 'react';
import MainLayout from '../Layouts/MainLayout';
import '../Styles/component.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const YOUR_SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID
    const YOUR_PUBLIC_KEY = process.env.REACT_APP_MY_PUBLIC_KEY
    
    
    const [messageStatus, setMessageStatus] = useState('');

  

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(`${YOUR_SERVICE_ID}`, `${YOUR_TEMPLATE_ID}`, form.current, `${YOUR_PUBLIC_KEY}`)
          .then((result) => {
              console.log(result.text);
              setMessageStatus('Message Sent');
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
      };

      return (
        <MainLayout>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <div id='name-email'>
                        <input type="text" 
                               name="name" 
                               placeholder='Name'
                               style={{marginRight: '2rem'}} 
                               />
                        <input type="email" 
                               name="email" 
                               placeholder='Email Address' 
                               />
                    </div>
                        
                        <input type="text" 
                               name="subject" 
                               placeholder='Subject' 
                               style={{height:'3rem', width:'40rem', padding:'1rem'}}/>
                        <textarea name="message" 
                                  placeholder="Your message"  
                                  style={{height:'15rem', width:'40rem', padding:'1rem'}}/>
                        <input type="submit" 
                               value="Send Message" 
                               style={{height:'3rem', width:'13rem', padding:'1rem', fontSize:'1.2rem'}}/>
                    </form>
            </div>    
        </MainLayout>
      )
}

