import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="jumbotron">
            {props.children}
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
);

export default Wrapper;