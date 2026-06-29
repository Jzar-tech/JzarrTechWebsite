import React from "react";
import "./WorldwideReach.css";
import { FaGlobe } from "react-icons/fa";

const WorldwideReach = () => {
  return (
    <section className="worldwide-reach">
      <div className="reach-icon">
        <FaGlobe />
      </div>

      <h2>
        Global <span>Impact.</span>
      </h2>

      <p>
        Delivering excellence across borders. We partner with
        visionaries from Silicon Valley to Sydney.
      </p>
    </section>
  );
};

export default WorldwideReach;