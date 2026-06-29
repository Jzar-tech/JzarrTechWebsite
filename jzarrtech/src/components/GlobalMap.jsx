import React from "react";
import "./GlobalMap.css";
import worldMap from "../Assets/world-map.jpg";

const locations = [
  { top: "32%", left: "18%", country: "USA" },
  { top: "25%", left: "12%", country: "Canada" },
  { top: "28%", left: "48%", country: "UK" },
  { top: "35%", left: "53%", country: "Germany" },
  { top: "42%", left: "60%", country: "Pakistan" },
  { top: "42%", left: "65%", country: "UAE" },
  { top: "65%", left: "72%", country: "Australia" },
];

const GlobalMap = () => {
  return (
    <section className="global-map-section">
      <div className="global-map">
        
        <img
          src={worldMap}
          alt="World Map"
          className="map-image"
          draggable="false"
        />

        {locations.map((item, index) => (
          <div
            key={index}
            className="location-dot"
            style={{
              top: item.top,
              left: item.left,
            }}
          >
            <span className="tooltip">
              {item.country}
            </span>
          </div>
        ))}

        <div className="map-stats">
          <span className="orange-dot"></span>

          <span>Active Projects</span>

          <div className="divider"></div>

          <strong>12 Countries</strong>
        </div>

      </div>
    </section>
  );
};

export default GlobalMap;