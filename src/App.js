import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Link} from 'react-router'
import Navigation from './components/Navigation.js'
import Content from './components/Content.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Content></Content>
      </div>
    );
  }
}

export default App;
