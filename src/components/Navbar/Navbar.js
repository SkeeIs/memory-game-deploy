import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h3 class="navbar-brand">Memory Game</h3>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" onClick={props.newGame}><span class="sr-only">New Game</span></a>
        </li>
        <li class="nav-item">
            <div>Current Score: </div>
        </li>
        <li class="nav-item">
            <div>High Score: </div>
        </li>
        </ul>
    </div>
  </nav>    
);

export default Navbar;