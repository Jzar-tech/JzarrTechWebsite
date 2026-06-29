import React from "react";
import "./Build6.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBullseye } from "react-icons/fa";

const Build6 = () => {
  return (
    <section className="build6-section">

      <div className="build6-container">

        {/* Left Icon */}
        <div className="build6-icon-wrap">
          <div className="build6-icon">
            <FaBullseye />
          </div>
        </div>

        {/* Center Content */}
        <div className="build6-content">

          <span>READY TO INTEGRATE YOUR SYSTEMS?</span>

          <h2>
            Let's Build Powerful Connections
          </h2>

          <p>
            Get a free consultation and discover how API integrations
            can transform your business operations.
          </p>

        </div>

        {/* Right Button */}
        <div className="build6-btn-wrap">

          <Link
            to="/contact-consultation"
            className="build6-btn"
          >
            Get Free API Consultation
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Build6;
