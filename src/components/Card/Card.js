import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
    <img src={props.gif} alt="head turn gif"/>
    </div>
)

export default Card;