import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodolistTable } from './components/TodolistTable'
class App extends Component {

  state = {
    text: "Hello world",
    text1: "yay"
  }

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">todolist</h1>
        </header>
        <div className="App-intro">
        <TodolistTable/>
        </div>
      </div>
    );
  }
}

export default App;
