import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <h3 className="navbar-brand">Memory Game</h3>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <button className="nav-link" onClick={props.newGame}>New Game</button>
        </li>
        <li className="nav-item">
            <div>Current Score: </div>
        </li>
        <li className="nav-item">
            <div>High Score: </div>
        </li>
        </ul>
    </div>
  </nav>    
);

export default Navbar;