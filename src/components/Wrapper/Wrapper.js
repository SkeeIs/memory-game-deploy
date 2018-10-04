import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            {props.children}
          </div>
        </div>
      </div>
    </div>
);

export default Wrapper;