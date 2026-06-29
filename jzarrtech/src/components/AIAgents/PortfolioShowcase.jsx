import React from "react";
import "./PortfolioShowcase.css";

const projects = [
  {
    category: "Customer Support AI",
    image:
      "https://otrs.com/wp-content/uploads/customer_service_management-1024x683.jpg",
    title: "E-Commerce Customer Support Bot",
    tech: "OpenAI, Zendesk",
    impact: "Reduced ticket volume by 45%",
  },
  {
    category: "WhatsApp Automation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    title: "Real Estate Lead Qualification",
    tech: "WhatsApp API, HubSpot",
    impact: "Increased qualified leads by 3X",
  },
  {
    category: "Workflow Automation",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200",
    title: "Internal HR Workflow Automator",
    tech: "Claude, Slack, Workday",
    impact: "Saved 20+ hours per week",
  },
];

const PortfolioShowcase = () => {
  return (
    <section id="ai-recent-projects" className="portfolio-showcase">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Recent Projects</h2>
          <p>
            Explore how we've helped businesses across industries scale with
            intelligent automation.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.title} />

                <span className="portfolio-badge">
                  {project.category}
                </span>
              </div>

              <div className="portfolio-content">
                <h3>{project.title}</h3>

                <div className="info-row">
                  <span>Tech Stack:</span>
                  <p>{project.tech}</p>
                </div>

                <div className="info-row">
                  <span>Impact:</span>
                  <p className="impact">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
