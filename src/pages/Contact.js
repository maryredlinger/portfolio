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
            {/*<div className="contact-imgs">
                <img src='darcy2.jpg'></img>
                <img src='darcy3.jpg'></img>
                <img src='darcy1.jpg'></img>
                <h4 className="rotate">No corgis were harmed</h4>
    </div>*/}
            <form className="my-form" onSubmit={sendEmail}>
                <div className="container">
                    <h1>Get in touch!</h1>
                    <ul>
                    <li>
                        <div className="grid grid-2">
                        <input type="text" placeholder="Name" name="user_name" required/>  
                        <input type="text" placeholder="Email" name="user_email" required/>
                        </div>
                    </li>
                    <li>
                        <textarea name="message" placeholder="Message"></textarea>
                    </li>   
                    <li>
                        <div className="grid grid-3">
                        <div className="required-msg">REQUIRED FIELDS</div>
                        <button className="btn-grid" type="submit" >
                            <span className="back">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt=""></img>
                            </span>
                            <span className="front" type="submit" value="Send">SUBMIT</span>
                        </button>
                        <button className="btn-grid" type="reset" >
                            <span className="back">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt=""></img>
                            </span>
                            <span className="front">RESET</span>
                        </button> 
                        </div>
                    </li>    
                    </ul>
                </div>
                </form>


            <div className="contact-items">

                <a target="_blank" href="https://www.linkedin.com/maryredlinger"><img src="linkeding-ps.jpg"></img></a>
                <a href="mailto:maryredlinger.dev@gmail.com?subject=Coming from your site"><img src="email-ps.jpg"></img></a>
                <a href="https://github.com/maryredlinger" target ="_blank"><img src="github.jpg"></img></a>
            </div>
        </div>

        </div>
    )
}

export default Contact;