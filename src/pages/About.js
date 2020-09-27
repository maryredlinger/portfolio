import React from 'react'

import '../styles/About.css'

import {Link} from 'react-router-dom'

import Nav from './NavBar'

const About = () => {

    return(
        <div className="about">
            <Nav />
            <div className="container">
                <div className="img-container">
                    <img src="portfolio.jpg"></img>
                </div>
                <div className="text-container">
                    <h1 className="name-font">Mary</h1>
                    <h4 className="that-font">Software Engineer / Web Developer / App Developer</h4>
                    <h4 className="that-font">Rock Climber / Corgi Enthusiast</h4>
                </div>
            </div>
        </div>
    )
}

export default About;