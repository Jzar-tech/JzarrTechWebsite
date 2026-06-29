import React from "react";
import "./StatsBar.css";

const StatsBar = () => {
  const stats = [
    {
      number: "250+",
      title: "Projects Delivered",
      description: "Successfully launched globally",
    },
    {
      number: "100%",
      title: "Happy Clients",
      description: "Consistent 5-star ratings",
    },
    {
      number: "25+",
      title: "Team Members",
      description: "Elite designers & engineers",
    },
    {
      number: "10+",
      title: "Years Experience",
      description: "Mastering digital excellence",
    },
  ];

  return (
    <section className="stats-bar">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-item" key={index}>
            <h2>{item.number}</h2>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;