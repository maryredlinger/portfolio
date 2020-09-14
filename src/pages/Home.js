import React from 'react';

import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="home">
            <a href="/about" className="no-underline blocks about-block"><h4>About</h4></a>
            <a href='/experience' className="no-underline blocks experience-block"><h4>Experience</h4></a>
            <div>
                <h1 className="gold">Mary Redlinger</h1>
                <h2 className="cursive">Software Engineer</h2>
            </div>
            <a href='/contact' className="no-underline blocks contact-block"><h4>Contact</h4></a>
            <a href='/side-projects' className="no-underline blocks sideproj-block"><h4>Side Projects</h4></a>
        </div>
    )
}

export default Home;