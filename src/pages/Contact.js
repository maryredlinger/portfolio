import React from 'react'
import emailjs from 'emailjs-com';

import {Link} from 'react-router-dom'
import '../styles/Contact.css'
import Nav from './NavBar'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('default_service', 'template_kIkHTHGd', e.target, 'user_5dEJ8CuBwqyySPlR7N5dW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return(
        <div className="about flex">
            <Nav />
 
        <form className="contact-form" onSubmit={sendEmail}>
          
          <label>Name</label>
          <input className="input" type="text" name="user_name" /><br/>
          <label>Email</label>
          <input className="input" type="email" name="user_email" /><br/>
          <label>Message</label>
          <textarea name="message" /><br/>
          <input className="send-button" type="submit" value="Send" />
        </form>

        </div>
    )
}

export default Contact;