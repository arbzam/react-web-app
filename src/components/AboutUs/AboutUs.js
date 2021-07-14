import React from "react";
import "./AboutUs.css";
import Heading from "../Heading/Heading";
const AboutUs = () => {
  return (
    <>
      <div className="about-us-page-head">
        <Heading smallHead="startup" boldHead="about us" />
      </div>
      <div className="container">
        <div className="about-us-para-con">
          <p>
            Our services range from Business Consultancy, Business formation,
            PRO Services to Serviced offices. We have a strong customer focused
            ethos of providing high quality company formation packages and
            related products..
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
