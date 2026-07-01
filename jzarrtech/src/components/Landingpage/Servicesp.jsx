import React from "react";
import "./Servicesp.css";
import Capabilities from "../Capabilities";

export default function Servicesp() {
  return (
    <section className="landing-services" id="services">
      <div className="landing-services__wrap">
        <div className="landing-services__intro">
          <div className="landing-services__number">7</div>
          <div className="landing-services__intro-copy">
            <h2>
              Essential Digital Solutions to
              <span> Establish Your Brand Presence</span>
            </h2>
            <p>
              To ensure your business thrives in the competitive market and leaves a lasting
              impression on clients or a dedicated audience, it is crucial to leverage digital
              solutions that make your brand stand out.
            </p>
          </div>
        </div>

        <Capabilities
          showHeading={false}
          showWhy={false}
          sectionId={undefined}
          className="landing-services__capabilities"
          disableLinks
        />
      </div>
    </section>
  );
}
