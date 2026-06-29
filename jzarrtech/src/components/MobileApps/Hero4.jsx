
import React from "react";
import { Link } from "react-router-dom";
import "./Hero4.css";
import mobileapp from "../MobileApps/Assets/mobileapp.mp4";

import {
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaMobileAlt,
  FaUsers,
} from "react-icons/fa";

const Hero4 = () => {
  const scrollToWork = () => {
    const section = document.getElementById("mobile-recent-projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero4">

      <video
        className="hero4-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={mobileapp} type="video/mp4" />
      </video>

      <div className="hero4-overlay"></div>

      <div className="hero4-container">

        <div
          className="hero4-content"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <span className="hero4-badge">
            MOBILE APP DEVELOPMENT
          </span>

          <h1 className="hero4-title">
            We Build Powerful
            <span> Mobile Apps</span>
          </h1>

          <h2 className="hero4-title2">
            That Drive Growth
          </h2>

          <p className="hero4-description">
            We design and develop high-performance
            mobile applications for iOS and Android
            that engage users, increase conversions
            and grow your business.
          </p>

          <div className="hero4-buttons">
            <Link to="/contact-consultation" className="hero4-primary-btn">
              Get Free Consultation
              <FaArrowRight />
            </Link>

            <button
              type="button"
              className="hero4-secondary-btn"
              onClick={scrollToWork}
            >
              View Our Work
              <FaArrowRight />
            </button>
          </div>

          <div className="hero4-features">

            <div className="hero4-feature">
              <div className="hero4-feature-icon">
                <FaRocket />
              </div>
              <span>High Performance</span>
            </div>

            <div className="hero4-feature">
              <div className="hero4-feature-icon">
                <FaShieldAlt />
              </div>
              <span>Secure & Scalable</span>
            </div>

            <div className="hero4-feature">
              <div className="hero4-feature-icon">
                <FaMobileAlt />
              </div>
              <span>User Friendly</span>
            </div>

            <div className="hero4-feature">
              <div className="hero4-feature-icon">
                <FaUsers />
              </div>
              <span>24/7 Support</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero4;

