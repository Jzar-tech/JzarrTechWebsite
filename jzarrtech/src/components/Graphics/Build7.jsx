import React from "react";
import "./Build7.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Build7 = () => {
const navigate = useNavigate();

const handleProjectClick = () => {
navigate("/contact-consultation");
};

return ( <section className="build7-section">

  <div className="build7-container">

    <div className="build7-content">

      <span>READY TO BRING YOUR IDEAS TO LIFE?</span>

      <h2>
        Let's Create Something Amazing Together!
      </h2>

      <p>
        Share your project details and our team will get
        back to you within 24 hours.
      </p>

    </div>

    <button
      className="build7-btn"
      onClick={handleProjectClick}
    >
      Start Your Project
      <FaArrowRight />
    </button>

  </div>

</section>

);
};

export default Build7;
