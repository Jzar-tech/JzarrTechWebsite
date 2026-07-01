import React from "react";
import "./Navbarp.css";

const logo = "/logop.png";

const Navbarp = ({ onContactClick }) => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbarp">
        <a className="navbar-logo" href="/" aria-label="Go to home page">
          <img src={logo} alt="Aspire Digital" />
        </a>

        
      </nav>
    </header>
  );
};

export default Navbarp;
