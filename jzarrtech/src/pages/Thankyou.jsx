import React, { useEffect } from "react";
import "./Thankyou.css";
import {
  FaCheck,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ThankYou = () => {

  useEffect(() => {
    // Fire page view for Google Ads
    if (window.gtag) {
      window.gtag("config", "AW-18296962228", {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <section className="thankyou-page">
      <div className="thankyou-card">

        <div className="success-icon">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>

          <div className="icon-circle">
            <FaCheck />
          </div>
        </div>

        <span className="message-title">
          MESSAGE SENT
        </span>

        <h1>Thank You!</h1>

        <p>
          Your request has been received.
          Our team will be in touch with
          you shortly.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <FaPhoneAlt />
            <span>(021) 36271630</span>
          </div>

          <div className="contact-item address">
            <FaMapMarkerAlt />
            <span>
              C, 10 Rashid Minhas Rd,
              Block 10-A Block 10 A
              Gulshan-e-Iqbal,
              Karachi, 75300, Pakistan
            </span>
          </div>

        </div>

        <Link to="/">
          <button>
            Back to Home
          </button>
        </Link>

      </div>
    </section>
  );
};

export default ThankYou;