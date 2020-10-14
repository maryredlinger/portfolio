import React from 'react'

import {Link} from 'react-router-dom'

import Nav from './NavBar'

import '../styles/SideProj.css'

class SideProj extends React.Component {
    constructor(){
        super()
        this.state = {
            background : '',
            fontColor: '',
            fontSize: '',
            title: 'Your Title',
            body: 'Your Body of Text',
            body2: 'Hello WOrld',
            font: ''
        }
    }

    setTitle(e){
        e.preventDefault();
        this.setState({ title : e.target.value})
        console.log(e)

    }

    setBody(e){
        e.preventDefault();
        this.setState({ body : e.target.value})
    }

    setBackground(e){
        e.preventDefault();
        let color = e.target.id
        this.setState({ background : color })
    }

    setFontColor(e){
        e.preventDefault();
        let color = e.target.id
        this.setState({ fontColor : color })
    }

    setFont(e){
        e.preventDefault()
        this.setState({ font : e.target.id})
        console.log(e.target.id)
    }

    addTextBox(){
        //var body = this.state.body2
        var element = document.createElement("textarea")
        element.setAttribute("value", `${this.state.body2}`);
        //element.setAttribute("onChange", this.setBody.bind(this))
        var newText = document.getElementById("newText");

        newText.appendChild(element);
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state.title)
    }

    render(){
        return(
            <div className="containerR">
                {/* Edit Section */}
                <div className="editContainer">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Title</label>
                        <input id="title" onChange={this.setTitle.bind(this)} value={this.state.title}  className=""  /><br/>
                        <label>Body</label>
                        <textarea className=""  onChange={this.setBody.bind(this)} value={this.state.body} name="body" /><br/>
                        <br/>
                        <span id="newText">&nbsp;</span>
                        <br/>
                        <label>Add TextBox</label>
                        <input onClick={this.addTextBox}  type="submit"/>
                        <br/>
                        <label>Background Color</label>
                        <div className="selectFlex">
                            <div className="selectBox red"  id="red" onClick={this.setBackground.bind(this)} value={this.state.background}></div>
                            <div className="selectBox green" id="green" onClick={this.setBackground.bind(this)} ></div>
                            <div className="selectBox blue" value="blue" id="blue" onClick={this.setBackground.bind(this)} ></div>
                            <div className="selectBox burlywood"id="burlywood" onClick={this.setBackground.bind(this)} ></div>
                        </div>
                        <br/>
                        <label>Font Color</label>
                        <div className="selectFlex">
                            <div className="selectBox black font-black"  id="font-black" onClick={this.setFontColor.bind(this)}></div>
                            <div className="selectBox green font-green" id="font-green" onClick={this.setFontColor.bind(this)} ></div>
                            <div className="selectBox blue font-blue" id="font-blue" onClick={this.setFontColor.bind(this)} ></div>
                            <div className="selectBox font-white"id="font-white" onClick={this.setFontColor.bind(this)} ></div>
                        </div>
                        <br/>
                        <div className="selectFlex">
                            <button className="selectBoxFont incosolata"  id="incosolata" onClick={this.setFont.bind(this)} >Incosolata</button>
                            <button className="selectBoxFont indieFlower" id="indieFlower" onClick={this.setFont.bind(this)} >Indie Flower</button>
                            <button className="selectBoxFont allura" id="allura" onClick={this.setFont.bind(this)} >Allura</button>
                        </div>
                        <br/>
                        <input  type="submit"/>

                    </form>
                </div >
                {/* Results Section */}
                <div className="displayContainer">
                    <div className={this.state.background} >
                        <h1 className={`${this.state.fontColor} ${this.state.font}`}>{this.state.title}</h1>
                        <p className={`${this.state.fontColor} ${this.state.font}`}>{this.state.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideProj;