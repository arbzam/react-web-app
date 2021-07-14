import React from "react";
import "./Topbar.css";
const Topbar = () => {
  return (
    <>
      <section className="top-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <p className="timings">
                <span>
                  <i className="far fa-clock"></i>
                </span>
                Sun To Thu 09-00 - 16:30
              </p>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="contact-link">
                <a href="tel:+971 (4) 314 2320" className="top-ontact">
                  <span>
                    <i className="fas fa-phone"></i>
                  </span>
                  (24/7) - +971 4 314 2320
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Topbar;
