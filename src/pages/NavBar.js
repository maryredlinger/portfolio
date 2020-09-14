import React from 'react'

import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    currentNav(){
        const pathname = window.location.pathname
        if(pathname === '/about'){
            return(
                <div className="navigation">
                    <Link className="no-underline" to='/about'><h4 className="nav-current about-green">About</h4></Link>
                    <Link className="no-underline" to='/experience'><h4>Experience</h4></Link>
                    <Link className="no-underline" to='/contact'><h4>Contact</h4></Link>
                    <Link className="no-underline" to='/side-projects'><h4>Side Projects</h4></Link>
                </div>
            )
        } else if(pathname === '/experience'){
            return(
                <div className="navigation">
                    <Link className="no-underline" to='/about'><h4>About</h4></Link>
                    <Link className="no-underline" to='/experience'><h4 className="nav-current about-green">Experience</h4></Link>
                    <Link className="no-underline" to='/contact'><h4>Contact</h4></Link>
                    <Link className="no-underline" to='/side-projects'><h4>Side Projects</h4></Link>
                </div>
            )
        } else if(pathname === '/contact'){
            return(
                <div className="navigation">
                    <Link className="no-underline" to='/about'><h4>About</h4></Link>
                    <Link className="no-underline" to='/experience'><h4>Experience</h4></Link>
                    <Link className="no-underline" to='/contact'><h4 className="nav-current about-green">Contact</h4></Link>
                    <Link className="no-underline" to='/side-projects'><h4>Side Projects</h4></Link>
                </div>
            )
        } else if(pathname === '/side-projects'){
            return(
                <div className="navigation">
                    <Link className="no-underline" to='/about'><h4>About</h4></Link>
                    <Link className="no-underline" to='/experience'><h4>Experience</h4></Link>
                    <Link className="no-underline" to='/contact'><h4>Contact</h4></Link>
                    <Link className="no-underline" to='/side-projects'><h4 className="nav-current about-green">Side Projects</h4></Link>
                </div>
            )
        }
    }
    render(){
        console.log(this.currentNav())
        console.log("here", window.location.pathname )

        return(
            <div>
                <h1 className="name-font">Mary Redlinger</h1>
                {this.currentNav()}
                <hr />

            </div>

        )
    }
}

export default NavBar;

