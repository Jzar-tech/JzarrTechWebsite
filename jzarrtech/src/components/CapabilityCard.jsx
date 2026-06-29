import React from "react";
import { Link } from "react-router-dom";

const CapabilityCard = ({
icon,
title,
description,
link,
}) => {
return ( <Link to={link} className="capability-card"> <div className="capability-card-content">

    <div className="capability-card-icon">
      {icon}
    </div>

    <h3>{title}</h3>

    <p>{description}</p>

    <div className="capability-card-footer">
      <span className="capability-explore">
        Explore Solution
      </span>

      <span className="capability-arrow">
        →
      </span>
    </div>

  </div>
</Link>


);
};

export default CapabilityCard;
