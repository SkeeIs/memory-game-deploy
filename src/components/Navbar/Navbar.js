import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg">
    <h2 className="title">Dramatic Head Turn Memory Game</h2>
        <ul>
        <li>
          <div className="comms">
          {props.message}
          </div>
        </li>
        <li>
            <div className="render-score">
              Current Score: {props.score} 
            </div>
        </li>
        <li>
            <div className="render-high-score">
              High Score: {props.highScore} 
            </div>
        </li>
        <li>
            <button className="btn new-game" onClick={props.newGame}>New Game</button>
        </li>
        </ul>
  </nav>    
);

export default Navbar;