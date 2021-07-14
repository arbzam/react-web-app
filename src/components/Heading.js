import React from 'react';
import './Heading.css';
const Heading = (props) => {
    return (
        <>
          <div className="footer-head-con">
           <h2>{props.head}</h2>   
           </div>
        </>
    )
}

export default Heading;
