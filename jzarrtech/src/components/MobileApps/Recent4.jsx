import React from "react";
import "./Recent4.css";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200",
    title: "E-Commerce App",
    category: "Shopping • iOS & Android",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    title: "Food Delivery App",
    category: "Food • iOS & Android",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    title: "Finance Management App",
    category: "Finance • iOS & Android",
  },
  {
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200",
    title: "Travel Booking App",
    category: "Travel • iOS & Android",
  },
];

const Recent4 = () => {
  return (
    <section id="mobile-recent-projects" className="recent4-section">
      <div className="recent4-container">

        <div className="recent4-header">
          <div>
            <span className="recent4-badge">OUR WORK</span>
            <h2>Recent Projects</h2>
          </div>
        </div>

        <div className="recent4-grid">
          {projects.map((project, index) => (
            <div
              className="recent4-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="recent4-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="recent4-content">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Recent4;
