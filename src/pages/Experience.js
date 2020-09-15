import React from 'react'

import {Link} from 'react-router-dom'

import Nav from './NavBar'

import '../styles/Experience.css'
import { render } from '@testing-library/react'


class Experience extends React.Component{
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

    render(){
        return(
            <div>
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
                    <a onClick={this.javaScript}><img src='bootstrap-icon.png'></img></a>
                </div>
                <div className="other show-flex" id="showCurrent">
                </div>
                <hr />
                <div className="other experience-flex">
                    <div id="proj5">
                        <div className="exp">
                            <h1>Walk In Remembrance</h1>
                            <img src='css-icon.png'></img>
                        </div>
                    </div>
                    <div id="proj4">
                        <div className="exp">
                            <h1>Stellar High Five</h1>
                            <img src='ruby-icon.png'></img>
                        </div>
                    </div>
                    <div id="proj3">
                        <div className="exp">
                            <h1>Tik Tak Toe</h1>
                            <img src='react-icon.png'></img>
                        </div>
                    </div>
                    <div id="proj2">
                        <div className="exp">
                            <h1>Hidden Gems</h1>
                            <img src='bootstrap-icon.png'></img>
                        </div>
                    </div>
                    <div id="proj1">
                        <div className="exp">
                            <h1>Divine Mercy Conference</h1>
                            <img src='angular-icon.png'></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Experience;