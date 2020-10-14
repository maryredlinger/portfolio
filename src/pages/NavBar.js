import React from 'react'

import { Link } from 'react-router-dom';

import Ham from "./Hamburger.js"

class NavBar extends React.Component{
    currentNav(){
        const pathname = window.location.pathname
        if(pathname === '/'){
            return(
                <div className="navigation">
                    <Link className="no-underline nav-item" to='/'><h4 className=" about-green">Mary Redlinger</h4></Link>
                    <Link className="no-underline nav-item" to='/experience'><h4>Experience</h4></Link>
                    <Link className="no-underline nav-item" to='/contact'><h4>Contact</h4></Link>
                </div>
            )
        } else if(pathname === '/experience'){
            return(
                <div className="navigation">
                    <Link className="no-underline nav-item" to='/'><h4>Mary Redlinger</h4></Link>
                    <Link className="no-underline nav-item" to='/experience'><h4 className=" about-green">Experience</h4></Link>
                    <Link className="no-underline nav-item" to='/contact'><h4>Contact</h4></Link>
                </div>
            )
        } else if(pathname === '/contact'){
            return(
                <div className="navigation">
                    <Link className="no-underline nav-item" to='/'><h4>Mary Redlinger</h4></Link>
                    <Link className="no-underline nav-item" to='/experience'><h4>Experience</h4></Link>
                    <Link className="no-underline nav-item" to='/contact'><h4 className=" about-green">Contact</h4></Link>
                </div>
            )
        } 
    }

    
    render(){
        console.log(this.currentNav())
        console.log("here", window.location.pathname )

        return(
            <div>
                <div className="nav-back navigation">
                    {this.currentNav()}
                </div>

                    <div className="verticalLine"></div>
                    <div className="show-ham"><Ham /></div>

            </div>


        )
    }
}

export default NavBar;

