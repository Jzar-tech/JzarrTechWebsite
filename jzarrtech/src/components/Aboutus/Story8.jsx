import React from "react";
import "./Story8.css";

import { FaShieldAlt } from "react-icons/fa";

const Story8 = () => {
  return (
    <section className="story8">

      <div className="story8-container">

        {/* LEFT */}

        <div className="story8-content">

          <span className="story8-tag">
            OUR STORY
          </span>

          <h2>
            Driven by Passion.
            <br />
            Focused on Impact.
          </h2>

          <p>
            Founded with a vision to create meaningful change,
            we have grown into a trusted partner for businesses
            worldwide. Our journey is built on a foundation of
            trust, innovation, and a relentless focus on
            delivering exceptional results.
          </p>

          <div className="story8-signature">
            Team Leadership
          </div>

          <h4>Team Leadership</h4>

          <p className="story8-small">
            Together, we build a better future.
          </p>

        </div>

        {/* RIGHT */}

        <div className="story8-image-wrapper">

          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            alt="Office Building"
            className="story8-image"
          />

          <div className="story8-card">

            <div className="story8-card-icon">
              <FaShieldAlt />
            </div>

            <div>
              <h3>Our Commitment</h3>

              <p>
                We are committed to delivering quality,
                building strong relationships, and creating
                a positive impact every day.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Story8;