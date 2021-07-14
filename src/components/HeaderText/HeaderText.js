import React from "react";
import { Link } from "react-router-dom";
import "./HeaderText.css";
const HeaderText = () => {
  // let url = document.URL;
  // let conbtn;
  // if (url !== "http://localhost:3000/") {
  //   conbtn = 
  //     <Link to="/contact">
  //       <button type="button" className="header-read-btn">
  //         contact us
  //       </button>
  //     </Link>
  // } else {
  //   conbtn = [
 

  //     </Link>,

  //   ];
  // }
  return (
    <>
      <div className="header-text">
        <div className="head-con">
          <h2 className="header-head">
            Money Doesn’t Come <span>Without Care</span>
          </h2>
        </div>
        <div className="para-con">
          <p>
            You will get a professional consultancy which will allowed you to
            know what is your requirements and how to reach it.
          </p>
        </div>
        <div className="flex-btn">
        <Link to="/about">
        <button type="button" className="header-read-btn">
          read more
        </button>
        </Link>
        <Link to="/contact">
        <button type="button" className="header-contact-btn">
          contact us
        </button>
      </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderText;
