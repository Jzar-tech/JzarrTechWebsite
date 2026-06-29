import React from "react";
import "./Trusted.css";

const Trusted = () => {
  return (
    <section className="trusted">
      
      <p className="trusted-text">
        TRUSTED BY GLOBAL VISIONARIES
      </p>

      <div className="slider">
        <div className="slide-track">

          <span>NextGen</span>
          <span>Elevate</span>
          <span>NovaTech</span>
          <span>TechCorp</span>
          <span>VentureBeat</span>
          <span>SaaSly</span>

          {/* duplicate for smooth loop */}
          <span>NextGen</span>
          <span>Elevate</span>
          <span>NovaTech</span>
          <span>TechCorp</span>
          <span>VentureBeat</span>
          <span>SaaSly</span>

        </div>
      </div>

    </section>
  );
};

export default Trusted;