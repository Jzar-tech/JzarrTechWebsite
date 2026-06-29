import React from "react";
import "./Stats.css";

const Stats = () => {
  const stats = [
    {
      number: "150+",
      title: "Projects Delivered",
      description: "Award-winning solutions launched globally.",
    },
    {
      number: "99%",
      title: "Client Satisfaction",
      description: "Consistent excellence and perfect 5-star ratings.",
    },
    {
      number: "$50M+",
      title: "Client Revenue Generated",
      description: "Measurable business growth for our partners.",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;