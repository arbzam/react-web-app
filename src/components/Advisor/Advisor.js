import React from "react";
import { Link } from "react-router-dom";
import "./Advisor.css";
const Advisor = () => {
  return (
    <>
      <section className="team-advisor">
        <div className="container">
          <div className="team-para-con">
            <p className="team-para">
              your personal <span>team of advisors</span> for every
              <span>business situations</span>
            </p>
          </div>
          <div className="team-second-para-con">
            <p>
              Starting a new business is a major milestone in a person’s life.
              As with most major decisions in life, there are certain things to
              consider when opening a business. Throughout the course of your
              research..
            </p>
          </div>
          <div className="team-btn-con">
            <Link to="/about">
              <button type="button" className="read-more-btn">
                read more
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advisor;
