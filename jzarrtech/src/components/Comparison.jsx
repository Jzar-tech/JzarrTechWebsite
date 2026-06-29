import React from "react";
import "./comparison.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Comparison = () => {
const data = [
{
feature: "Design Quality",
company: "World-class Awwwards standard",
agency: "Generic templates",
},
{
feature: "Development Architecture",
company: "Modern stack (React, Next.js, AI)",
agency: "Outdated monoliths",
},
{
feature: "Speed to Market",
company: "Weeks, not months. Agile delivery.",
agency: "Endless delays and scope creep",
},
{
feature: "Communication",
company: "Direct access to founders & leads",
agency: "Lost in account managers",
},
{
feature: "Post-Launch Support",
company: "Proactive growth & scaling partnership",
agency: "Hand off and disappear",
},
];

return ( <section className="comparison-section"> <div className="comparison-container">

    {/* Header */}
    <div
      className="comparison-header"
      data-aos="fade-down"
    >
      <div className="feature-title">
        Features
      </div>

      <div className="brand">
        Jzarr Tech
      </div>

      <div className="agency">
        Typical Agency
      </div>
    </div>

    {/* Rows */}
    {data.map((item, index) => (
      <div
        className="comparison-row"
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 150}
      >
        <div className="feature-name">
          {item.feature}
        </div>

        <div className="good">
          <FaCheckCircle className="check-icon" />
          <span>{item.company}</span>
        </div>

        <div className="bad">
          <FaTimesCircle className="cross-icon" />
          <span>{item.agency}</span>
        </div>
      </div>
    ))}

    {/* CTA */}
    <div
      className="comparison-cta"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <h3>
        Ready to upgrade your digital presence?
      </h3>

      <a href="#pricing-contact">
        Start Your Upgrade
      </a>
    </div>

  </div>
</section>


);
};

export default Comparison;
