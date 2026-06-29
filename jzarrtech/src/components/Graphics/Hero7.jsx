import React from "react";
import "./Hero7.css";
import bgVideo from "./Assets/3dgraphics.mp4";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  
} from "react-icons/fa";

const Hero7 = () => {
  const scrollToServices = () => {
    const section = document.getElementById("services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="graphics-hero">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="graphics-video"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="graphics-overlay"></div>

      <div className="graphics-container">

        {/* Left Content */}
        <div className="graphics-content">

          <h1>
            We Design Ideas
            <br />
            That <span>Inspire</span>
          </h1>

          <p>
            We create stunning 2D illustrations, 3D models,
            animations and visual experiences that elevate your
            brand and help you stand out in a competitive market.
          </p>

          <div className="graphics-buttons">
            <Link to="/contact-consultation" className="primary-btn">
              Explore Our Work
              <FaArrowRight />
            </Link>

            <button className="secondary-btn" onClick={scrollToServices}>
              Our Services
            </button>
          </div>

          <div className="trusted-section">
            <p>Trusted by 500+ Brands Worldwide</p>

            <div className="brand-logos">
              <span>Envato</span>
              <span>Google</span>
              <span>Microsoft</span>
              <span>Dribbble</span>
              <span>Amazon</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero7;
