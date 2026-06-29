import React from "react";
import "./Recent3.css";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    platform: "Shopify Store",
    title: "Glow Beauty Store",
    niche: "Fashion & Beauty",
    stat1: "+120%",
    stat1Label: "Sales Increase",
    stat2: "+85%",
    stat2Label: "Traffic Increase",
  },

  {
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c",
    platform: "Amazon FBA",
    title: "Home Essentials",
    niche: "Home & Kitchen",
    stat1: "+150%",
    stat1Label: "Sales Increase",
    stat2: "+70%",
    stat2Label: "ACOS Reduction",
  },

  {
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
    platform: "Etsy Store",
    title: "Handmade Jewelry",
    niche: "Jewelry & Accessories",
    stat1: "+110%",
    stat1Label: "Sales Increase",
    stat2: "+90%",
    stat2Label: "Traffic Increase",
  },

  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    platform: "eBay Store",
    title: "Sneaker Hub",
    niche: "Footwear",
    stat1: "+130%",
    stat1Label: "Sales Increase",
    stat2: "+60%",
    stat2Label: "Profit Increase",
  },
];
const Recent3 = () => {
  return (
    <section className="recent3-section">
      <div className="recent3-container">

        <div className="recent3-header">

          <div className="recent3-title">
            <span className="recent3-badge">
              RECENT PROJECTS
            </span>

            <h2>Our Recent Work</h2>
          </div>

        </div>

        <div className="recent3-grid">

          {projects.map((project, index) => (
            <div className="recent3-card" key={index}>

              <div className="recent3-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="recent3-content">

                <span className="recent3-platform">
                  {project.platform}
                </span>

                <h3>{project.title}</h3>

                <p>{project.niche}</p>

                <div className="recent3-stats">

                  <div>
                    <h4>{project.stat1}</h4>
                    <span>{project.stat1Label}</span>
                  </div>

                  <div>
                    <h4>{project.stat2}</h4>
                    <span>{project.stat2Label}</span>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Recent3;
