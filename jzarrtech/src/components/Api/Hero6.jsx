import React from "react";
import "./Hero6.css";
import { Link } from "react-router-dom";

import apiVideo from "./Assets/apivideo.mp4";

import {
  FaArrowRight,
  FaPlay,
  FaShieldAlt,
  FaCode,
  FaSyncAlt,
  FaServer,
  FaUsers,
} from "react-icons/fa";

const Hero6 = () => {
  const scrollToWork = () => {
    const section = document.getElementById("work");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="apihero-section">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="apihero-video"
      >
        <source src={apiVideo} type="video/mp4" />
      </video>

      <div className="apihero-overlay"></div>

      <div className="apihero-container">

        {/* LEFT CONTENT */}
        <div className="apihero-left">

          <span className="apihero-tag">
            API INTEGRATION
          </span>

          <h1>
            <span className="apihero-heading-main">
              Seamless API Integration.
            </span>
            <span className="apihero-heading-accent">
              Stronger Connections.
            </span>
          </h1>

          <p>
            We connect your systems, automate workflows,
            and unlock the full potential of your tools with
            secure and scalable API integrations.
          </p>

          <div className="apihero-buttons">

            <Link to="/contact-consultation" className="apihero-btn-primary">
              Get Free API Consultation
              <FaArrowRight />
            </Link>

            <button className="apihero-btn-secondary" onClick={scrollToWork}>
              View Integrations
              <FaPlay />
            </button>

          </div>

          <div className="apihero-features">

            <div className="apihero-feature">
              <FaShieldAlt />
              <span>Secure & Reliable</span>
            </div>

            <div className="apihero-feature">
              <FaCode />
              <span>Custom APIs</span>
            </div>

            <div className="apihero-feature">
              <FaSyncAlt />
              <span>Real-Time Sync</span>
            </div>

            <div className="apihero-feature">
              <FaServer />
              <span>Scalable</span>
            </div>

            <div className="apihero-feature">
              <FaUsers />
              <span>Experts</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        

      </div>

    </section>
  );
};

export default Hero6;
