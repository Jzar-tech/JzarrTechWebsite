import React from "react";
import "./WhyChooseUs.css";

import teamImage from "../../Assets/team.jpg";

import {
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";

const WhyChooseUs = () => {
  const benefits = [
    "Faster customer response",
    "Increased lead conversion",
    "Reduced operational costs",
    "24/7 automated support",
    "Scalable systems",
    "Data-driven optimization",
  ];

  return (
    <section className="why-choose">
      <div className="why-container">

        {/* Left Side */}

        <div
          className="why-image-wrapper"
          data-aos="fade-right"
        >
          <img
            src={teamImage}
            alt="Team"
            className="why-image"
          />

          <div className="uptime-card">
            <div className="uptime-icon">
              <FiShield />
            </div>

            <div>
              <h3>99.9%</h3>
              <p>Uptime Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div
          className="why-content"
          data-aos="fade-left"
        >
          <h2>
            Why Businesses Choose
            <br />
            JZARR Tech
          </h2>

          <p>
            We don't just build software; we build
            growth engines. Our AI solutions are
            designed to integrate seamlessly into
            your current workflows, maximizing
            efficiency without disrupting your
            business.
          </p>

          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="benefit-item"
              >
                <FiCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;