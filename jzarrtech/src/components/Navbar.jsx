
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaCode,
  FaCube,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const serviceItems = [
  {
    to: "/ai-agents",
    title: "AI Agents",
    description: "Smart automation for sales, support, and workflows",
    icon: <FaRobot />,
  },
  {
    to: "/custom-websites",
    title: "Custom Websites",
    description: "Premium websites built for speed and conversion",
    icon: <FaGlobe />,
  },
  {
    to: "/Ecommerce",
    title: "Ecommerce",
    description: "Stores that turn traffic into repeat customers",
    icon: <FaShoppingBag />,
  },
  {
    to: "/MobileApps",
    title: "Mobile Apps",
    description: "iOS and Android experiences designed to scale",
    icon: <FaMobileAlt />,
  },
  {
    to: "/Seo",
    title: "SEO & Growth",
    description: "Visibility, rankings, and performance growth",
    icon: <FaSearch />,
  },
  {
    to: "/Api",
    title: "API Integrations",
    description: "Connected systems that keep your stack in sync",
    icon: <FaCode />,
  },
  {
    to: "/Graphics",
    title: "2D & 3D Graphics",
    description: "Branded visuals, motion, and product rendering",
    icon: <FaCube />,
  },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(false);
      setServicesOpen(false);
    }
  };

  const handleStartProject = () => {
    if (location.pathname === "/") {
      scrollToSection("contact");
      return;
    }

    navigate("/contact-consultation");
  };

  const handleServicesToggle = () => {
    if (window.innerWidth <= 768) {
      setServicesOpen(!servicesOpen);
    }
  };

  return (
    <nav className="jz-navbar">
      <Link
  to="/"
  className="jz-navbar-logo"
  onClick={() => {
    setMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  <img src={logo} alt="Jzarr Tech" />
</Link>

      <ul className={`jz-navbar-menu ${menuOpen ? "active" : ""}`}>
        <li className="jz-services-dropdown">
          <button
            type="button"
            className="jz-nav-link jz-services-btn"
            onClick={handleServicesToggle}
            aria-expanded={servicesOpen}
          >
            <span>Services</span>
            <FaChevronDown className="jz-dropdown-icon" />
          </button>

          <div className={`jz-services-menu ${servicesOpen ? "active" : ""}`}>
            <div className="jz-services-menu-head">
              <span className="jz-services-eyebrow">
                What We Build
              </span>

              <p>
                Explore the solutions we craft for ambitious brands
                and modern teams.
              </p>
            </div>

            <div className="jz-services-grid">
              {serviceItems.map((item) => (
                <Link
                  to={item.to}
                  className="jz-services-item"
                  key={item.title}
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  <div className="jz-services-icon">
                    {item.icon}
                  </div>

                  <div className="jz-services-copy">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </li>

        <li>
          <button
            type="button"
            className="jz-nav-link"
            onClick={() => scrollToSection("work")}
          >
            Work
          </button>
        </li>

        <li>
          <button
            type="button"
            className="jz-nav-link"
            onClick={() => scrollToSection("process")}
          >
            Process
          </button>
        </li>

        <li>
          <Link
            to="/blog"
            className="jz-nav-link jz-blog-link"
            onClick={() => {
              setMenuOpen(false);
              setServicesOpen(false);
            }}
          >
            Blog
          </Link>
        </li>
      </ul>

      <div className="jz-navbar-actions">
        <button
          type="button"
          className="jz-project-btn"
          onClick={handleStartProject}
        >
          Start Project →
        </button>

        <button
          type="button"
          className="jz-mobile-menu-btn"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setServicesOpen(false);
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
