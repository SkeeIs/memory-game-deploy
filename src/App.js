import React, { Component } from "react";
import gifs from "./gifs.json";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import "./App.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      
      let j = Math.floor(Math.random() * (i + 1));
      
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  state = {
    gifs,
    score: 0,
    highScore: 0,
    message: "",
    clicked: []
  };

  handleShuffle = () => {
    let shuffledGifs = shuffleArray(gifs);
    this.setState({ friends: shuffledGifs });
  };

  newGame = (event) => {
    console.log("new game.");
    
    this.setState({
      score: 0,
      highScore: 0,
      message: "Game Over! You already turned that head!",
      clicked: [],
    });
    this.handleShuffle();
    }

    handleClick = id => {
      if (this.state.clicked.length === 0) {
        this.newGame()
      }
      if (this.state.clicked.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({ clicked: this.state.clicked.concat(id) });
      } else {
        this.newGame();
      }
    };

    handleIncrement = () => {
      const newScore = this.state.score + 1;
      this.setState({
        score: newScore,
        message: "You guessed correctly!"
      });
      if (newScore >= this.state.highScore) {
        this.setState({ highScore: newScore });
      }
      else if (newScore === 12) {
        this.setState({ correctIncorrect: "You got them all! Good Game!" });
      }
      this.handleShuffle();
    };


  render() {
    return ( 
      <div>   
        <Navbar
          score = {this.state.score}
          highScore = {this.state.highScore}
          message = {this.state.message}
          newGame={this.newGame}
        />
        <Wrapper>
          {this.state.gifs.map(gifs => (
            <Card
              key = {gifs.id}
              handleClick = {this.handleClick}
              handleIncrement = {this.handleIncrement}
              handleShuffle = {this.handleShuffle}
              id = {gifs.id}
              gif = {gifs.gif}
            /> 
          ))}  
        </Wrapper>
      </div>
    );
  }
}

export default App;
