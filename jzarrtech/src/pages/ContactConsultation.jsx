import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaGlobe,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaVideo,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountryCodeSelect from "../components/CountryCodeSelect";
import "./ContactConsultation.css";
import { getPhoneMaxLength, sanitizePhoneInput } from "../utils/phoneValidation";
import { CONTACT_API_URL } from "../config/api";

const initialForm = {
  firstName: "",
  lastName: "",
  company: "",
  countryIso: "US",
  email: "",
  phone: "",
  service: "Services",
  details: "",
};

const sanitizeName = (value) => value.replace(/[^a-zA-Z\s'-]/g, "");
const ContactConsultation = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "firstName" || name === "lastName") {
      setFormData((current) => ({
        ...current,
        [name]: sanitizeName(value),
      }));

      return;
    }

    if (name === "phone") {
      setFormData((current) => ({
        ...current,
        phone: sanitizePhoneInput(value, current.countryIso),
      }));

      return;
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const contactPayload = {
      formId: "website-consultation",
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      whatsapp: formData.phone,
      occupation: formData.company,
      service: formData.service,
      subject: `Website inquiry - ${formData.service}`,
      message: formData.details,
    };

    const response = await axios.post(CONTACT_API_URL, contactPayload);

    setIsSubmitted(true);

    alert(response.data.message || "Thanks. Your message has been received.");

    setFormData(initialForm);

  } catch (error) {
    console.error(error);
    alert(
      error.response?.data?.message ||
        "We could not send your message. Please try again later.",
    );

  }
};

  const handleCountryChange = (countryIso) => {
    setFormData((current) => ({
      ...current,
      countryIso,
      phone: sanitizePhoneInput(current.phone, countryIso),
    }));
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-page-hero">
          <div className="contact-page-shell">
            <div className="contact-page-header">
              <span>Contact Us</span>
              <h1>Start the Conversation About Your Next Digital Project.</h1>
              <p>
                Whether you need AI Agents, a custom website, e-commerce, or a
                mobile app, our team can help shape the right plan.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-page-section">
          <div className="contact-page-shell">
            <div className="contact-layout">
              <div className="contact-left-panel">
                <h2>
                  Ready to <span>Build?</span>
                </h2>

                <p>
                  Schedule a discovery call with our team and we will map out
                  the design, tech stack, and growth path for your business.
                </p>

                <div className="contact-call-card">
                  <div className="contact-call-header">
                    <div className="contact-icon-box">
                      <FaCalendarAlt />
                    </div>

                    <div>
                      <h3>Discovery Call</h3>
                      <span>Strategy session with our team</span>
                    </div>
                  </div>

                  <hr />

                  <div className="contact-call-info">
                    <p>
                      <FaVideo />
                      Google Meet / Zoom
                    </p>

                    <p>
                      <FaClock />
                      30 Minutes
                    </p>

                    <p>
                      <FaGlobe />
                      Worldwide client support
                    </p>
                  </div>

                  <button type="button" className="contact-calendar-btn">
                    Open Calendar
                  </button>
                </div>

                <div className="contact-info-strip">
                  <div className="contact-info-item">
                    <FaEnvelope />
                    <span>hello@jzarrtech.com</span>
                  </div>

                  <div className="contact-info-item">
                    <FaLayerGroup />
                    <span>Web, mobile, AI, and growth services</span>
                  </div>
                </div>
              </div>

              <div className="contact-form-panel">
                <h3>Or send us a message</h3>

                <form className="contact-page-form" onSubmit={handleSubmit}>
                  <div className="contact-name-row">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      autoComplete="given-name"
                      inputMode="text"
                      pattern="[A-Za-z\s'-]+"
                      title="First name should contain letters only."
                      required
                    />

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      autoComplete="family-name"
                      inputMode="text"
                      pattern="[A-Za-z\s'-]+"
                      title="Last name should contain letters only."
                      required
                    />
                  </div>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                  />

                  <div className="contact-phone-row">
                    <CountryCodeSelect
                      value={formData.countryIso}
                      onChange={handleCountryChange}
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      autoComplete="tel-national"
                      inputMode="tel"
                      maxLength={getPhoneMaxLength(formData.countryIso)}
                      pattern={`\\d{7,${getPhoneMaxLength(formData.countryIso)}}`}
                      title="Please enter a valid phone number for the selected country code."
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Work Email"
                    required
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="Services" disabled>
                      Services
                    </option>
                    <option>AI Agents</option>
                    <option>Custom Websites</option>
                    <option>E-Commerce</option>
                    <option>Mobile Apps</option>
                    <option>SEO & Growth</option>
                    <option>API Integrations</option>
                    <option>2D & 3D Graphics</option>
                  </select>

                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Project Details"
                    required
                  ></textarea>

                   <label className="terms-consent">
                    <input type="checkbox" name="termsAccepted" required />
                    <span>
                      I agree to the{" "}
                      <Link to="/terms-and-conditions">Terms and Conditions</Link>
                      {", "}
                      <Link to="/privacy-policy">Privacy Policy</Link>
                      {" and "}
                      <Link to="/disclaimer">Disclaimer</Link>
                    </span>
                  </label>

                  <button type="submit" className="contact-send-btn">
                    Send Request
                  </button>

                  {isSubmitted && (
                    <p className="contact-success-message">
                      Thanks. Your message has been received and our team will
                      get back to you shortly.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-location-section">
          <div className="contact-page-shell">
            <div className="contact-location-grid">
              <div className="contact-location-card">
                <span className="contact-location-eyebrow">Visit Jzarr</span>
                <h2>Jzarr Contact Information</h2>

                <div className="contact-location-list">
                  <div className="contact-location-item">
                    <FaCalendarAlt />
                    <div>
                      <strong>Working Days</strong>
                      <span>Monday - Saturday</span>
                    </div>
                  </div>

                  <div className="contact-location-item">
                    <FaClock />
                    <div>
                      <strong>Working Hours</strong>
                      <span>12:00 PM - 9:00 PM PST</span>
                    </div>
                  </div>

                  <div className="contact-location-item">
                    <FaMapMarkerAlt />
                    <div>
                      <strong>Address</strong>
                      <span>C, 10 Rashid Minhas Rd, Block 10-A Block 10 A Gulshan-e-Iqbal, Karachi, 75300, Pakistan</span>
                    </div>
                  </div>

                  <div className="contact-location-item">
                    <FaPhoneAlt />
                    <div>
                      <strong>Phone</strong>
                      <span>(021) 36271630</span>
                    </div>
                  </div>

                  <div className="contact-location-item">
                    <FaEnvelope />
                    <div>
                      <strong>Email</strong>
                      <span>hello@jzarrtech.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-map-card">
                <iframe
                  title="JZARR location on Google Maps"
                  src="https://www.google.com/maps?q=24.9058166,67.1111532&z=17&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactConsultation;
