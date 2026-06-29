import React from "react";
import "./Recent6.css";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    title: "E-Commerce Store",
    stat1: "+156%",
    text1: "Order Processing",
    stat2: "+83%",
    text2: "Data Accuracy",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    title: "SaaS Platform",
    stat1: "+210%",
    text1: "Workflow Efficiency",
    stat2: "+95%",
    text2: "User Satisfaction",
  },
  {
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200",
    title: "Logistics Company",
    stat1: "+180%",
    text1: "Real-Time Tracking",
    stat2: "+70%",
    text2: "Delivery Efficiency",
  },
  {
    image: "https://risk.lexisnexis.com/-/media/images/healthcare/2-industry%20pages/vertical-markets/provider/2024%20page%20refresh/lnrs%20provider-circle%20png.png?h=452&iar=0&w=445&hash=01984BE28A8E6EC47917F0A32F747405",
    title: "Healthcare Provider",
    stat1: "+130%",
    text1: "Data Synchronization",
    stat2: "+90%",
    text2: "System Reliability",
  },
];

const Recent6 = () => {
  return (
    <section className="recent6-section">
      <div className="recent6-header">
        <span>OUR RESULTS</span>
        <h2>Real Integrations. Real Impact.</h2>
      </div>

      <div className="recent6-grid">
        {projects.map((project, index) => (
          <div className="recent6-card" key={index}>
            <div className="recent6-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="recent6-content">
              <h3>{project.title}</h3>

              <div className="recent6-stats">
                <div>
                  <h4>{project.stat1}</h4>
                  <p>{project.text1}</p>
                </div>

                <div>
                  <h4>{project.stat2}</h4>
                  <p>{project.text2}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recent6;