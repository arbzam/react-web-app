import React from "react";
import { Link } from "react-router-dom";
import "./Copyright.css";
const Cypyright = () => {
  return (
    <>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="d-flex justify-content-between align-items-center responsive-flex">
                <p className="copyright-para">
                  Copyright 2019 - All Rights Reserved By StartUp
                </p>
                <ul className="copyright-links-con">
                  <li>
                    <Link className="copyright-link" to="/terms">
                      terms and conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="copyright-link" to="/privacy">
                      privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="social-flex">
                <ul>
                  <li>
                    <Link
                      to="www.facebook.com"
                      className="copyright-social-link"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="www.twitter.com"
                      className="copyright-social-link"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="www.facebook.com"
                      className="copyright-social-link"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cypyright;
