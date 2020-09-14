import React from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <h1>Mary Redlinger</h1>
            <div className="navigation">
                <Link className="no-underline" to='/about'><h4>About</h4></Link>
                <Link className="no-underline" to='/experience'><h4>Experience</h4></Link>
                <Link className="no-underline" to='/contact'><h4>Contact</h4></Link>
                <Link className="no-underline" to='/side-projects'><h4>Side Projects</h4></Link>
            </div>
        </div>

    )
}

export default Nav;