import React from "react";
import "./Platform.css";

import { FaAmazon } from "react-icons/fa";
import { SiShopify, SiEtsy, SiEbay } from "react-icons/si";
const platforms = [
  {
    icon: <SiShopify />,
    title: "Shopify",
    desc: "Custom Shopify stores that convert and scale.",
    color: "#95BF47",
  },
  {
    icon: <FaAmazon />,
    title: "Amazon",
    desc: "Optimized listings and PPC to dominate Buy Box.",
    color: "#FF9900",
  },
  {
    icon: <SiEtsy />,
    title: "Etsy",
    desc: "Etsy store setup and SEO to boost visibility.",
    color: "#F1641E",
  },
  {
    icon: <SiEbay />,
    title: "eBay",
    desc: "Professional eBay stores that drive more sales.",
    color: "#0064D2",
  },
];
const Platform = () => {
  return (
    <section className="platform-section">
      <div className="platform-container">

        <div className="platform-header">
          <span className="platform-badge">
            PLATFORMS WE WORK ON
          </span>

          <h2>
            We Build & Grow On Top
            <span> Marketplaces</span>
          </h2>
        </div>

        <div className="platform-grid">
          {platforms.map((item, index) => (
            <div
              className="platform-card"
              key={index}
              style={{ "--accent": item.color }}
            >
              <div className="platform-shimmer"></div>

              <div className="platform-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <a href="/">
                Learn More
               
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Platform;