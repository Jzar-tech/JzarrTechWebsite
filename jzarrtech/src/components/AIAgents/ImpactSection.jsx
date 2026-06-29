import React from "react";
import "./ImpactSection.css";

const stats = [
  {
    value: "98%",
    title: "Client Satisfaction",
  },
  {
    value: "3X",
    title: "Lead Conversion",
  },
  {
    value: "24/7",
    title: "Automated Support",
  },
  {
    value: "40%",
    title: "Operational Efficiency Increase",
  },
];

const ImpactSection = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <h2 className="impact-title">Real Business Impact</h2>

        <p className="impact-subtitle">
          The numbers speak for themselves. Our AI solutions deliver measurable
          growth and efficiency.
        </p>

        <div className="impact-grid">
          {stats.map((item, index) => (
            <div className="impact-card" key={index}>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;