import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <Link to="/" className="footer-logo" aria-label="Jzarr Tech home">
            <img src={logo} alt="Jzarr Tech" />
          </Link>

          <p className="description">
            We design and build world-class digital experiences for
            visionaries ready to scale.
          </p>

          <h4>Join our newsletter</h4>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />

            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li>
              <Link to="/ai-agents" className="footer-link">
                AI Agents
              </Link>
            </li>
            <li>
              <Link to="/custom-websites" className="footer-link">
                Custom Websites
              </Link>
            </li>
            <li>
              <Link to="/Ecommerce" className="footer-link">
                E-Commerce
              </Link>
            </li>
            <li>
              <Link to="/MobileApps" className="footer-link">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link to="/seo" className="footer-link">
                SEO & Growth
              </Link>
            </li>
            <li>
              <Link to="/Api" className="footer-link">
                API Integration
              </Link>
            </li>
            <li>
              <Link to="/Graphics" className="footer-link">
                2D & 3D Graphics
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <ul>
            <li>
              <Link to="/Aboutus" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Ourprocess" className="footer-link">
                Our Process
              </Link>
            </li>
            <li>
              <Link to="/contact-consultation" className="footer-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="footer-link">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="footer-link">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>

          <ul>
            <li>hello@jzarrtech.com</li>
            <li>(021) 36271630</li>
            <li>C, 10 Rashid Minhas Rd, Block 10-A Block 10 A Gulshan-e-Iqbal, Karachi, 75300, Pakistan</li>
          </ul>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/jzarrofficial/"
              aria-label="Jzarr Tech on Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://pk.linkedin.com/company/jzarrofficial"
              aria-label="Jzarr Tech on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/jzarrofficial/"
              aria-label="Jzarr Tech on Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>(c) 2026 Jzarr Tech. All rights reserved.</p>

        <div className="bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms of Service</Link>

          <span className="status">All systems operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
