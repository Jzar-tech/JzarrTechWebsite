import React from "react";
import { Link } from "react-router-dom";
import "./Hero5.css";
import Seo from "../Seo/Assets/seovideo.mp4";

import {
  FaArrowRight,
  FaChartBar,
  FaCog,
  FaFileAlt,
  FaClipboardList,
  FaPlay,
} from "react-icons/fa";

const Hero5 = () => {
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
    <section className="seo-hero">
      <video className="seo-video" autoPlay muted loop playsInline>
        <source src={Seo} type="video/mp4" />
      </video>

      <div className="seo-overlay"></div>

      <div className="seo-container">
        <div className="seo-left">
          <span className="seo-tag">SEO & GROWTH</span>

          <h1>
            Rank Higher.
            <br />
            <span>Grow Faster.</span>
          </h1>

          <p>
            We help businesses increase visibility, drive organic traffic and
            generate more leads with data-driven SEO and growth strategies.
          </p>

          <div className="seo-buttons">
            <Link to="/contact-consultation" className="seo-btn-primary">
              Get Free SEO Audit
              <FaArrowRight />
            </Link>

            <button className="seo-btn-secondary" onClick={scrollToWork}>
              View Our Work
              <FaPlay />
            </button>
          </div>

          <div className="seo-features">
            <div className="seo-feature">
              <FaChartBar />
              <span>Data-Driven Strategies</span>
            </div>

            <div className="seo-feature">
              <FaCog />
              <span>Technical SEO</span>
            </div>

            <div className="seo-feature">
              <FaFileAlt />
              <span>Content That Ranks</span>
            </div>

            <div className="seo-feature">
              <FaClipboardList />
              <span>Transparent Reporting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
