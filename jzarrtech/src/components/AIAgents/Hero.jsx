import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import aiVideo from "./Assets/ai-agents.mp4";

const Hero = () => {
  const scrollToWork = () => {
    const section = document.getElementById("ai-recent-projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="service-hero">
      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={aiVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div
          className="hero-content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1>
            Transform Customer
            <br />
            Conversations Into
            <br />
            <span>Automated Business</span>
            <br />
            <span>Growth</span>
          </h1>

          <p>
            We design intelligent AI systems that automate support, qualify
            leads, streamline operations, and help businesses scale faster.
          </p>

          <div className="hero-buttons">
            <Link to="/contact-consultation" className="primary-btn">
              Get Free Consultation ->
            </Link>

            <button
              type="button"
              className="secondary-btn"
              onClick={scrollToWork}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
