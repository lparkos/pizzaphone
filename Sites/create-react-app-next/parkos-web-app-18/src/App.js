import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/shared/Header.js';
import Nav from './components/shared/Nav.js';
import Textblock from './components/shared/Textblock.js';
import Footer from './components/shared/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Textblock/>
        <Footer/>
      </div>
    );
  }
}

export default App;
