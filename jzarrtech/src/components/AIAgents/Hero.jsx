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
    <section className="ai-hero">
      <video className="ai-hero__video" autoPlay muted loop playsInline>
        <source src={aiVideo} type="video/mp4" />
      </video>

      <div className="ai-hero__overlay"></div>
      <div className="ai-hero__glow"></div>

      <div className="ai-hero__container">
        <div
          className="ai-hero__content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="ai-hero__eyebrow">AI Agents for Modern Teams</div>

          <h1 className="ai-hero__title">
            Transform Customer
            <br />
            Conversations Into
            <br />
            <span className="ai-hero__title-accent">
              Automated Business
              <br />
              Growth
            </span>
          </h1>

          <p className="ai-hero__description">
            We design intelligent AI systems that automate support, qualify
            leads, streamline operations, and help businesses scale faster.
          </p>

          <div className="ai-hero__actions">
            <Link to="/contact-consultation" className="ai-hero__primary">
              Get Free Consultation ->
            </Link>

            <button
              type="button"
              className="ai-hero__secondary"
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
