import React from "react";
import "./TrustedTech.css";

const TrustedTech = () => {
  const technologies = [
    "OpenAI",
    "Claude",
    "Gemini",
    "WhatsApp",
    "Zapier",
    "HubSpot",
    "Salesforce",
    "Slack",
    "Google Workspace",
  ];

  return (
    <section className="trusted-tech">
      <div className="trusted-tech-container">

        <h5>
          TRUSTED TECHNOLOGIES WE WORK WITH
        </h5>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-pill" key={index}>
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedTech;