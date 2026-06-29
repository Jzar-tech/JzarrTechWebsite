import React from "react";
import "./Hero8.css";

import {
  FaBullseye,
  FaEye,
  FaUsers,
} from "react-icons/fa";

const Hero8 = () => {
  return (
    <section className="hero8">
      <div className="hero8-container">

        {/* LEFT CONTENT */}
        <div className="hero8-left">

          <span className="hero8-tag">ABOUT US</span>

          <h1>
            We Are Here to <br />
            Make a <span>Difference</span>
          </h1>

          <p>
            We are a team of dedicated professionals committed
            to delivering exceptional digital solutions that
            empower businesses to grow, innovate, and succeed
            in today's competitive market.
          </p>

          

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero8-right">

          <div className="hero8-image-wrap">

            <div className="hero8-shape-top"></div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Business Team"
              className="hero8-image"
            />

            <div className="hero8-shape-bottom"></div>

          </div>

        </div>

      </div>

      {/* FEATURES */}

      <div className="hero8-features">

        <div className="feature8">
          <div className="feature8-icon">
            <FaBullseye />
          </div>

          <div>
            <h3>Our Mission</h3>
            <p>
              To provide innovative solutions that drive
              business growth and create lasting value.
            </p>
          </div>
        </div>

        <div className="feature8">
          <div className="feature8-icon">
            <FaEye />
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              To become a globally trusted leader known
              for innovation and excellence.
            </p>
          </div>
        </div>

        <div className="feature8">
          <div className="feature8-icon">
            <FaUsers />
          </div>

          <div>
            <h3>Our Values</h3>
            <p>
              Integrity, teamwork, innovation and customer
              success above everything.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero8;
