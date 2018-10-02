import React, { Component } from "react";
import logo from "./logo.svg";
import gifs from "./gifs.json";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
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
        <Navbar/>
        <Wrapper>
          <Card/>  
        </Wrapper>
      </div>
    );
  }
}

export default App;
