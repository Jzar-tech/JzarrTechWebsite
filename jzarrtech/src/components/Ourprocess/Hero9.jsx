import React from "react";
import "./Hero9.css";

import {
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaAward,
} from "react-icons/fa";

const Hero9 = () => {
  return (
    <section className="hero9">

      <div className="hero9-container">

        {/* LEFT */}

        <div className="hero9-content">

          <span className="hero9-tag">OUR PROCESS</span>

          <h1>
            Our Process.
            <br />
            Built for Your <span>Success.</span>
          </h1>

          <p>
            We follow a proven process to deliver high-quality
            solutions that meet your business needs and exceed
            your expectations.
          </p>

          <div className="hero9-features">

            <div className="hero9-feature">
              <FaUsers />
              <span>Collaborative Approach</span>
            </div>

            <div className="hero9-feature">
              <FaBullseye />
              <span>Focused on Results</span>
            </div>

            <div className="hero9-feature">
              <FaAward />
              <span>Quality Assurance</span>
            </div>

            <div className="hero9-feature">
              <FaChartLine />
              <span>Continuous Improvement</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero9-visual">

          <div className="hero9-circle">

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400"
              alt="Process Team"
            />

          </div>

          {/* Step 1 */}

          
        </div>

      </div>

    </section>
  );
};

export default Hero9;
