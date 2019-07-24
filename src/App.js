import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbarpage from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <Router>

        <Navbarpage />

      </Router>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cover Letter Creator
        </a>
      </header>
    </div>
  );
}

export default App;
