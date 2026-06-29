import React from "react";
import "./Build8.css";

import { FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Build8 = () => {
  return (
    <section className="build8">

      <div className="build8-container">

        {/* Left */}

        <div className="build8-left">

          <div className="build8-icon">
            <FaPaperPlane />
          </div>

          <h2>
            Let's Build Something
            <br />
            Amazing <span>Together</span>
          </h2>

        </div>

        {/* Right */}

        <div className="build8-right">

          <p>
            Whether you have a question or want to start a
            project, we're here to help. Let's connect and
            make it happen.
          </p>

          {/* WORKING BUTTON */}

          <Link to="/contact-consultation" className="build8-btn">
            Get In Touch
            <FaArrowRight />
          </Link>

        </div>

        {/* Decorative Dots */}

        <div className="build8-dots-left"></div>
        <div className="build8-dots-right"></div>

      </div>

    </section>
  );
};

export default Build8;