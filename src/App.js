import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/Home.css'
import './styles/About.css'
import './styles/Nav.css'


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import SideProj from './pages/SideProj'


function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/experience" exact component={Experience}/>
            <Route path="/side-projects" exact component={SideProj}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
