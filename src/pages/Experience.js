import React from 'react'

import {Link} from 'react-router-dom'

import Nav from './NavBar'

import '../styles/Experience.css'


const Experience = () => {

    return(
        <div className="about">
            <Nav />
            <div className="experience-container">
                <img src='rails-icon.png'></img>
                <img src='ruby-icon.png'></img>
                <img src='node-icon.png'></img>
                <img src='js-icon.png'></img>
                <img src='react-icon.png'></img>
                <img src='mysql-icon.png'></img>
                <img src='html-icon.png'></img>
            </div>
        </div>
    )
}

export default Experience;