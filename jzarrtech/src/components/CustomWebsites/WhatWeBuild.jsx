import React from "react";
import "./WhatWeBuild.css";

import {
  FaGlobe,
  FaBuilding,
  FaWindowMaximize,
  FaShoppingCart,
  FaUserTie,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe />,
    title: "Business Websites",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Websites",
  },
  {
    icon: <FaWindowMaximize />,
    title: "Landing Pages",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Stores",
  },
  {
    icon: <FaUserTie />,
    title: "Portfolio Websites",
  },
  {
    icon: <FaCloud />,
    title: "SaaS Platforms",
  },
];

const WhatWeBuild = () => {
  return (
    <section className="wb-section">
      <div className="wb-container">

        <div
          className="wb-header"
          data-aos="fade-up"
        >
          <h2>
            What We <span>Build</span>
          </h2>

          <div className="wb-line"></div>

          <p>
            We create custom websites tailored for every
            business model and industry.
          </p>
        </div>

        <div className="wb-grid">
          {services.map((item, index) => (
            <div
              className="wb-card"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="wb-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeBuild;