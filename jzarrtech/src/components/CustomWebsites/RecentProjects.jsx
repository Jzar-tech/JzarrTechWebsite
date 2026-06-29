import React from "react";
import "./RecentProjects.css";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    title: "Fintech Solutions",
    industry: "Fintech",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
    title: "Organic Store",
    industry: "E-Commerce",
    tech: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    title: "Creative Agency",
    industry: "Agency",
    tech: ["Next.js", "Tailwind", "CMS"],
  },
];

const RecentProjects = () => {
  return (
    <section className="cw-projects-section">
      <div className="cw-projects-container">

        <div
          className="cw-projects-header"
          data-aos="fade-up"
        >
          <h2>Recent Projects</h2>

          <div className="cw-projects-line"></div>

          <p>
            Explore some of our latest digital products,
            websites and growth-driven experiences.
          </p>
        </div>

        <div className="cw-projects-grid">
          {projects.map((project, index) => (
            <div
              className="cw-project-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="cw-project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="cw-project-content">
                <h3>{project.title}</h3>

                <p>
                  <strong>Industry:</strong>{" "}
                  {project.industry}
                </p>

                <div className="cw-project-tags">
                  {project.tech.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentProjects;
