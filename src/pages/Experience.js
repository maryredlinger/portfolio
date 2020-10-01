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
                experience: {
                    etsy: {
                        name: 'Got Mary?',
                        description: 'Got Mary? She\'\s Got Your Back',
                        link:  'https://www.etsy.com/shop/gotmary',
                        style: 'back_etsy',
                        github: null
                    },
                    alert: {
                        name: 'Alert Now!',
                        description: 'Dedicated emergency public communications program',
                        link:  null,
                        style: 'back_alert',
                        github: 'https://github.com/maryredlinger/cubed-app'
                    },
                    athanasius: {
                        name: 'Athanasius Academia',
                        description: 'Supporting Families - Educating Children',
                        link: 'http://athanasiusacademia.com/',
                        style: 'back_ath',
                        github: 'https://github.com/maryredlinger/joe-b-site'
                    },
                    sosl: {
                        name: 'Survivors of Suicide Loss',
                        description: 'SOSL reaches out to and supports people who have lost a loved one to suicide. ',
                        link: 'https://www.soslsd.org/',
                        style: 'back_sosl',
                        github: null
                    },
                    ride: {
                        name: 'Ride For Life',
                        description: 'San Diego Suicide Preventino 5th Annual Ride For Life',
                        link: 'https://sosl.rallybound.org/ride-for-life/',
                        style: 'back_ride',
                        github: null
                    },
                    walk: {
                        name: 'Walk In Remembrance with Hope',
                        description: 'SOSL\'\s 14th Annual Walk in Remembrance with Hope',
                        link: 'https://sosl.rallybound.org/walkinhopesd/',
                        style: 'back_walk',
                        github: null
                    },
                    stellar: {
                        name: 'Stellar High Five',
                        description: 'Spreading good will and StellarHighFives across the internets',
                        link: 'https://stellar-high-five-staging.herokuapp.com/',
                        style: 'back_stellar',
                        github: 'https://github.com/CodingZeal/stellarhighfive'
                    },                    
                    hidden: {
                        name: 'Hidden Gems',
                        description: 'Discover low-key events in the San Diego area.',
                        link: 'https://nameless-savannah-62731.herokuapp.com/',
                        style: 'back_hidden',
                        github: 'https://github.com/Fabolous5/Hidden-Gem'
                    },                    
                    ticTac: {
                        name: 'Tic Tac Toe',
                        description: 'The Modern Minimalist Tic Tac Toe',
                        style: 'back_tictac',
                        link: null,
                        github: 'https://github.com/maryredlinger/tic-tac-toe'
                    },
                    mercy: {
                        name: 'Divine Mercy Conference',
                        description: '21\'\st Annual Divine Mercy Conference',
                        link: 'http://www.sddivinemercy.com/',
                        style: 'back_mercy',
                        github: null
                    }
                }
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

    render(){
        var experience = this.state.experience
        console.log(experience)
        return(
            <div>
                <Nav/>
            <div className="experience">
                <div className="experience-container nav">
                    <div className="flex-item"><img src='js-icon.png'></img></div>
                    <div className="flex-item"><img src='ruby-icon.png'></img></div>
                    <div className="flex-item"><img src='react-icon.png'></img></div>
                    <div className="flex-item"><img src='node-icon.png'></img></div>
                    <div className="flex-item"> <img src='rails-icon.png'></img></div>
                    <div className="flex-item"> <img src='angular-icon.png'></img></div>
                    <div className="flex-item"> <img src='mysql-icon.png'></img></div>
                    <div className="flex-item"> <img src='postgres-icon.png'></img></div>
                    <div className="flex-item"> <img src='wordpress-icon.png'></img></div>
                    <div className="flex-item">  <img src='css-icon.png'></img></div>
                    <div className="flex-item">  <img src='bootstrap-icon.png'></img></div>
                </div>
                <div className="other show-flex" id="showCurrent">
                </div>
                <hr />
                <div className="top-text">
                <h1 className="h1">My Recent Work</h1>
                <br/>
                <h3 className="that-font">Here are a few projects I've worked on recently. Want to learn more? <a href="/contact">Email Me.</a></h3>
                </div>
                <div className="experience-flex">
                    {Object.keys(experience).map((exp, index) => {
                        return(
                        <div key={index} className={experience[exp].style}>
                            <div className="ath font">
                                <h2 className="ath_initial">{experience[exp].name}</h2>
                                <div className="ath_description">
                                    <h3 className="description">{experience[exp].description}</h3>
                                {experience[exp].link !== null && 

                                <a className="button" target="_blank" href={experience[exp].link}>Visit Website →</a>
                                }
                                {experience[exp].github !== null && 
                                    <a target="_blank" href={experience[exp].github} className="button">GitHub Repo →</a>
                                }
                                </div>

                            </div>
                        </div>
                            )
                    })}

                </div>
                </div>        
            </div>
        )
    }
}

export default Experience;