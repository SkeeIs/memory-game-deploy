import React, { Component } from "react";
import gifs from "./gifs.json";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import "./App.css";

//shuffle helper function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      
      let j = Math.floor(Math.random() * (i + 1));
      
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  //the states we will be tracking
  state = {
    gifs,
    score: 0,
    highScore: 0,
    message: "Click each gif once to win!",
    clicked: []
  };
  //when we need to shuffle images we will call on helper function
  handleShuffle = () => {
    let shuffledGifs = shuffleArray(gifs);
    this.setState({ friends: shuffledGifs });
  };
  //on click of new game reset high score & all other states to starting values
  resetGame = (event) => {
    console.log("clear high score. new game.");
    
    this.setState({
      score: 0,
      highScore: 0,
      message: "Click each gif once to win!",
      clicked: [],
    });
    this.handleShuffle();
    };
    //what gets called when you click the same image twice
    newGame = (event) => {
      console.log("new game.");
      
      this.setState({
        score: 0,
        message: "Game Over! You already turned that head!",
        clicked: [],
      });
      this.handleShuffle();
      }
    //essentially our game logic that checks if we've already clicked a gif
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
    //each click of a new gif calls this
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

  //what we render out to our index.js file
  render() {
    return ( 
      <div>   
        <Navbar
          score = {this.state.score}
          highScore = {this.state.highScore}
          message = {this.state.message}
          newGame={this.resetGame}
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
