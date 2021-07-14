import React from "react";
import "./Footer.css";
import Heading from "../Heading";
import FooterDetail from '../FooterDetail/FooterDetail';
const ShortAbout = () => {
  return (
    <>
      <section className="short-about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-us">
                <Heading head="contact info" />
                <FooterDetail />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="choose-us-con">
                <Heading head="why choose us?" />
                <ul className="choose-ul">
                  <li>
                    <span>1-</span>
                    Turn your business idea into reality as you dreams
                  </li>
                  <li>
                    <span>2-</span>
                    We are always put your belongs first
                  </li>
                  <li>
                    <span>3-</span>
                    You will get a professional consultancy
                  </li>
                  <li>
                    <span>4-</span>
                    You will get all your services under one Roof
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="short">
                <Heading head="short about us" />
                <p className="short-para">
                  Our services range from Business Consultancy, Business
                  formation, PRO Services to Serviced offices. We have a strong
                  customer focused ethos of providing high quality company
                  formation packages and related products..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShortAbout;
