
// import logo from './logo.svg';
import './App.css';
import { Route,Switch } from "react-router-dom"
import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import "./images/logo-ironhack.png"
import About from "./Components/About"
import Home from "./Components/Home"
import Archive from "./Components/Archive"
import Stats from "./Components/stats"


export default class App extends Component {
  render() {
    return (
      <div>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="home">
      <img
        alt=""
        src="./images/logo-ironhack.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      The Forge
    </Navbar.Brand>
    <Nav className="mr-auto">
      
      <Nav.Link href="about">About</Nav.Link>
      {/* <Nav.Link href="friend">Create A Friend</Nav.Link>
      <Nav.Link href="generator">Friend Generator</Nav.Link> */}
    </Nav>
  </Navbar>
        {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Spinny Spin
      </header>
    </div> */}
    <Switch>
          <Route path= "/about" component={About}/>
          <Route path= "/home" component={Home}/>
          <Route path= "/archive" component={Archive}/>
          <Route path = "/stats" components ={Stats}/>
          </Switch>
        
      </div>
    )
  }
}

