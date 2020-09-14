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
                <p>My name is Mary Redlinger and I am a new developer in the San Diego area looking to break into the tech industry to put my skills to work. I am a graduate from LEARN academy, an innovative full stack bootcamp based in downtown San Diego, where I became proficient in Full Stack Development and Object Oriented Programming. I would love to work for a company that plays a role in creating a better future for current and future generations and especially seeking out a company that is accessible.</p>
        </div>
    )
}

export default About;