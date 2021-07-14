import React from "react";
import "./Package.css";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import arrow from "../../images/arrow.png";
import "../Card.css";
const Package = () => {
  return (
    <>
      <section className="package">
        <Heading smallHead="startup" boldHead="packages" />
        <div className="container">
          <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                <Link to="/services">
        <div className="service-card-con">
          <div className="img-con">
            <img
              src={arrow}
              alt="arrow"
              className="img-fluids"
            />
          </div>
          <h2 className="card-head">sharjah</h2>
          <div className="card-ul-con">
            <ul>
                <li>Shonsorship</li>
                <li>Government fees</li>
                <li>Office registration</li>
                <li>35,000 dhs</li>
            </ul>
          </div>
        </div>
      </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Link to="/services">
        <div className="service-card-con">
          <div className="img-con">
            <img
              src={arrow}
              alt="arrow"
              className="img-fluids"
            />
          </div>
          <h2 className="card-head">sharjah</h2>
          <div className="card-ul-con">
            <ul>
              {/* {props.list.map((val , i) => ({val} key={i} */}
                <li>Shonsorship</li>
                <li>Government fees</li>
                <li>Office registration</li>
                <li>35,000 dhs</li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Link to="/services">
        <div className="service-card-con">
          <div className="img-con">
            <img
              src={arrow}
              alt="arrow"
              className="img-fluids"
            />
          </div>
          <h2 className="card-head">sharjah</h2>
          <div className="card-ul-con">
            <ul>
              {/* {props.list.map((val , i) => ({val} key={i} */}
                <li>Shonsorship</li>
                <li>Government fees</li>
                <li>Office registration</li>
                <li>35,000 dhs</li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Link to="/services">
        <div className="service-card-con">
          <div className="img-con">
            <img
              src={arrow}
              alt="arrow"
              className="img-fluids"
            />
          </div>
          <h2 className="card-head">sharjah</h2>
          <div className="card-ul-con">
            <ul>
              {/* {props.list.map((val , i) => ({val} key={i} */}
                <li>Shonsorship</li>
                <li>Government fees</li>
                <li>Office registration</li>
                <li>35,000 dhs</li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      </Link>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Package;
