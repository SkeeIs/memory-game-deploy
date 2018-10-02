import React from "react";
import "./Card.css";

const Card = props => (
    <div class="card">
    <img class="card-img" src={props.gif} alt="gif image"/>
    </div>
)

export default Card;