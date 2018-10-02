import React, { Component } from "react";
import logo from "./logo.svg";
import gifs from "./gifs.json";
import Card from "./components/Card";
import Navbar from "./components/Nabar";
import Modal from "./components/Modal";
import Wrapper from "./components/Wrapper";
import "./App.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      
      const j = Math.floor(Math.random() * (i + 1));
      
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


class App extends Component {
  state = {
    roundScore: 0,
    highScore: 0,
  }
  render() {
    return (
      <div className="App">
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
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
