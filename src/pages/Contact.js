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
        <div className="contact-container">
            <div className="contact-imgs">
                <img src='darcy2.jpg'></img>
                <img src='darcy3.jpg'></img>
                <img src='darcy1.jpg'></img>
                <h4 className="rotate">No corgis were harmed</h4>
            </div>
            <div className="flex-contact">
            <div className="contact-items">
                <div>

                <h3>Email</h3>
                <h3><a href="mailto:maryredlinger.dev@gmail.com?subject=Coming from your site">maryredlinger.dev@gmail.com</a></h3>
                </div>
                <div>

                <h3>Linkedin</h3>
                <h3><a href="https://www.linkedin.com/maryredlinger">www.linkedin.com/maryredlinger</a></h3>
                </div>
                <div>

                <h3>Github</h3>
                <h3><a href="https://github.com/maryredlinger">www.github.com/maryredlinger</a></h3>
                </div>
            </div>
            
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="shove">
                <h3>Name</h3>
                <input className="input" type="text" name="user_name" /><br/>
                <h3>Email</h3>
                <input className="input" type="email" name="user_email" /><br/>
                </div>
                <div className="shove">
                <h3>Message</h3>
                <textarea name="message" /><br/>
                </div>
                <input className="send-button" type="submit" value="Send" />
            </form>
            </div>
        </div>

        </div>
    )
}

export default Contact;