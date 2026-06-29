
import React from "react";
import "./Business5.css";
import { FaBullseye, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Business5 = () => {
  return (
    <section className="business5">
      <div className="business5-container">

        <div className="business5-icon">
          <FaBullseye />
        </div>

        <div className="business5-content">
          <span className="business5-tag">
            READY TO GROW YOUR BUSINESS?
          </span>

          <h2>
            Let's Rank Your Business on Top
          </h2>

          <p>
            Get a free SEO audit and discover opportunities
            to grow your traffic, leads, and revenue.
          </p>
        </div>

        <Link to="/contact-consultation" className="business5-btn">
          Get Free SEO Audit
          <FaArrowRight />
        </Link>

      </div>
    </section>
  );
};

export default Business5;

