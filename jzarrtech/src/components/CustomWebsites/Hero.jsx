import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import websiteVideo from "./Assets/website-bg.mp4";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="cw-hero">

      {/* Background Video */}
      <video
        className="cw-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={websiteVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="cw-overlay"></div>

      <div className="cw-container">

        <div
          className="cw-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="cw-tag">
            CUSTOM WEBSITE DEVELOPMENT
          </span>

          <h1>
            Custom Websites
            <br />
            Built For Your Success
          </h1>

          <p>
            We design and develop high-performance custom websites
            that help businesses grow, engage users and stand out
            from the competition.
          </p>

          <div className="cw-buttons">
            <Link to="/contact-consultation" className="primary-btn">
              Get Started
              <FaArrowRight />
            </Link>
          </div>

          <div className="cw-features">
            <span>✓ Modern Design</span>
            <span>✓ SEO Friendly</span>
            <span>✓ High Performance</span>
            <span>✓ 100% Responsive</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
