
import React from "react";
import "./Recent5.css";


const projects = [
  {
    image:
      "https://www.smartbugmedia.com/hs-fs/hubfs/AdobeStock_338756915-min.jpeg?width=1180&name=AdobeStock_338756915-min",
    title: "E-Commerce Store",
    stat1: "+156%",
    label1: "Organic Traffic",
    stat2: "+78%",
    label2: "Revenue Growth",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    title: "Local Business",
    stat1: "+212%",
    label1: "Rankings Increased",
    stat2: "+134%",
    label2: "Leads Generated",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    title: "SaaS Company",
    stat1: "+180%",
    label1: "Organic Traffic",
    stat2: "+92%",
    label2: "Signups Increased",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    title: "Service Based Business",
    stat1: "+145%",
    label1: "Keyword Rankings",
    stat2: "+87%",
    label2: "Conversion Rate",
  },
];
const Recent5 = () => {
  return (
    <section className="recent5">
      <div className="recent5-container">

        <span className="recent5-tag">
          OUR RESULTS
        </span>

        <h2 className="recent5-heading">
          Real Results for Real Businesses
        </h2>

        <div className="recent5-grid">
          {projects.map((item, index) => (
            <div className="recent5-card" key={index}>

              <div className="recent5-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="recent5-content">
                <h3>{item.title}</h3>

                <div className="recent5-stats">

                  <div>
                    <span>{item.stat1}</span>
                    <p>{item.label1}</p>
                  </div>

                  <div>
                    <span>{item.stat2}</span>
                    <p>{item.label2}</p>
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

export default Recent5;

