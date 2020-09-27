import React from 'react'

import {Link} from 'react-router-dom'

import Nav from './NavBar'

import '../styles/Experience.css'
import { render } from '@testing-library/react'


class Experience extends React.Component{
    constructor(){
        super()
            this.state = {
                id : '',
            }
    }
    javaScript(){
        var MyDiv1 = document.getElementById('proj1').innerHTML;
        var MyDiv2 = document.getElementById('proj2').innerHTML;
        var MyDiv3 = document.getElementById('proj4').innerHTML;
        var MyDiv4 = document.getElementById('proj5').innerHTML;
        var div = document.getElementById("showCurrent")
        div.innerHTML = MyDiv1
        div.innerHTML += MyDiv2
        div.innerHTML += MyDiv3
        div.innerHTML += MyDiv4
    }

    ruby(){
        var MyDiv2 = document.getElementById('proj2').innerHTML;
        var MyDiv3 = document.getElementById('proj4').innerHTML;
        var div = document.getElementById("showCurrent")
        div.innerHTML = MyDiv2
        div.innerHTML += MyDiv3
    }

    react(){
        var MyDiv2 = document.getElementById('proj2').innerHTML;
        var MyDiv3 = document.getElementById('proj4').innerHTML;
        var MyDiv4 = document.getElementById('proj5').innerHTML;
        var div = document.getElementById("showCurrent")
        div.innerHTML = MyDiv2
        div.innerHTML += MyDiv3
        div.innerHTML += MyDiv4
    }

    openPopup(e){
        var id = e.currentTarget.dataset.id
        var box = document.getElementById(`box-${id}`)
        this.setState({ id : id})
        console.log("her", e.currentTarget.dataset.id)
        box.style.display = "block";
    }
    
    closePopup(){
        var id = this.state.id
        var box = document.getElementById(`box-${id}`)
        box.style.display = "none";
    }
    render(){
        console.log(this.state.id)
        return(
            <div onClick={this.closePopup.bind(this)}>
                <Nav />
            <div className="experience">
                <div className="experience-container nav">
                    <a onClick={this.javaScript}><img src='js-icon.png'></img></a>
                    <a onClick={this.ruby}><img src='ruby-icon.png'></img></a>
                    <a onClick={this.react}><img src='react-icon.png'></img></a>
                    <a onClick={this.javaScript}><img src='node-icon.png'></img></a>
                    <a onClick={this.javaScript}> <img src='rails-icon.png'></img></a>
                    <a onClick={this.javaScript}> <img src='angular-icon.png'></img></a>
                    <a onClick={this.javaScript}> <img src='mysql-icon.png'></img></a>
                    <a onClick={this.javaScript}> <img src='postgres-icon.png'></img></a>
                    <a onClick={this.javaScript}> <img src='wordpress-icon.png'></img></a>
                    <a onClick={this.javaScript}><img src='css-icon.png'></img></a>
                    <a onClick={this.openPopup}><img src='bootstrap-icon.png'></img></a>
                </div>
                <div className="other show-flex" id="showCurrent">
                </div>
                <hr />
                <div className="other experience-flex">
                    <div id="proj5">
                        <div className="exp">
                            <h1>Walk In Remembrance</h1>
                            <img src='walk_in_hope.png'></img>
                            <a onClick={this.openPopup.bind(this)} data-id ="walk-in-hope"  ><h1>HELLO</h1></a>

                            </div>
                    </div>
                    <div id="proj4">
                        <div className="exp">
                            <h1>Stellar High Five</h1>
                            <img src='shf.png'></img>
                            <a onClick={this.openPopup.bind(this)} data-id ="stellar"  ><h1>HELLO</h1></a>

                        </div>
                    </div>
                    <div id="proj3">
                        <div className="exp">
                            <h1>Tic Tac Toe</h1>
                            <img src='tic_tac.png'></img>
                        </div>
                    </div>
                    <div id="proj2">
                        <div className="exp">
                            <h1>Hidden Gems</h1>
                            <img src='hidden_gems.png'></img>
                        </div>
                    </div>
                    <div id="proj1">
                        <div className="exp">
                            <h1>Divine Mercy Conference</h1>
                            <img src='divine.png'></img>
                        </div>
                    </div>
                </div>
            </div>

                <div className="boxPopup" id="box-walk-in-hope">
                <a onClick={this.closePopup.bind(this)}><h1>&times;</h1></a>
                    <h3>I was tasked to complete a site used to host all information and media for Survivors of Suicide Loss (SOSL)'s event Walk in Rememberance with Hope. I used the CMS RallyBound to add to the exsisting site and help maintain this site until the end of the fundraising event in September 2020. I had to create blog posts, tickets for registration and sponsorship, as well as keeping up with all COVID changes</h3>
                </div>
                <div className="boxPopup" id="box-stellar">
                <a onClick={this.closePopup.bind(this)}><h1>&times;</h1></a>
                    <h3>Stellar High Five is a project I was a part of during my internship with Zeal - a development consultancy comapny. I was part of a team of 4, where I had the role of updating and brining back to life a 5 year old web application, Stellar High Five, featuring a new React front end.</h3>
                </div>

                <div className="boxPopup" id="box-">
                    <h1>hi</h1>
                </div>

                <div className="boxPopup" id="box-">
                    <h1>hi</h1>
                </div>

\                
            </div>
        )
    }
}

export default Experience;