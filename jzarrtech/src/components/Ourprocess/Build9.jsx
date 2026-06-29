import React from "react";
import "./Build9.css";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Build9 = () => {
  return (
    <section className="build9">
      <div className="build9-container">

        {/* Left Decorative Dots */}
        <div className="build9-dots left">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>

        <div className="build9-content">

          <div className="build9-heading">

            <div className="build9-icon">
              <FaPaperPlane />
            </div>

            <div>
              <h2>
                Let's Build Something
                <br />
                Amazing <span>Together</span>
              </h2>
            </div>

          </div>

          <div className="build9-right">
            <p>
              Whether you have a question or want to start a project,
              we're here to help. Let's connect and make it happen.
            </p>

           <Link
                       to="/contact-consultation"
                       className="build9-btn"
                     >
                       Get In Touch
                       <FaArrowRight />
                     </Link>

          </div>

        </div>

        {/* Right Decorative Elements */}
        <div className="build9-pattern"></div>

        <div className="build9-dots right">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>

      </div>
    </section>
  );
};

export default Build9;
