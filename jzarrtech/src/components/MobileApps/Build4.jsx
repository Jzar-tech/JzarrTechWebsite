import React from "react";
import { Link } from "react-router-dom";
import "./Build4.css";
import { FaArrowRight, FaCode } from "react-icons/fa";

const Build4 = () => {
  return (
    <section className="build4-section">

      <div
        className="build4-container"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >

        <div className="build4-icon-box">
          <FaCode />
        </div>

        <div className="build4-content">
          <span>HAVE AN IDEA?</span>

          <h2>Let's Build Your Next Big App</h2>

          <p>
            Tell us your idea and we'll turn it into a powerful
            mobile app that drives real results for your business.
          </p>
        </div>

        <Link to="/contact-consultation" className="build4-btn">
          Get Free Quote
          <FaArrowRight />
        </Link>

      </div>

    </section>
  );
};

export default Build4;
