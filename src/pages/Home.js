import React from 'react';

import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="home">
            <Link className="no-underline" to='/experience'><h4>Experience</h4></Link>
            <Link className="no-underline" to='/about'><h1 className="nav-current about-green name-font">Mary Redlinger</h1></Link>
            <Link className="no-underline" to='/contact'><h4>Contact</h4></Link>
        </div>
    )
}

export default Home;