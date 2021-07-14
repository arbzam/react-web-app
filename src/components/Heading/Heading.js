import React from "react";
import "./Heading.css";
const Heading = (props) => {
  return (
    <>
      <div className="container-fluids">
        <div className="package-head-con">
          <span className="left-line"></span>
          <div className="package-head">
            <span>{props.smallHead}</span>
            <h2>{props.boldHead}</h2>
          </div>
          <span className="right-line"></span>
        </div>
      </div>
    </>
  );
};

export default Heading;
