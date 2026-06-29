import React, { useState } from "react";
import "./ContactSection.css";
import { FaCalendarAlt, FaVideo, FaClock } from "react-icons/fa";
import CountryCodeSelect from "./CountryCodeSelect";
import axios from "axios";
import { getPhoneMaxLength, sanitizePhoneInput } from "../utils/phoneValidation";
import { CONTACT_API_URL } from "../config/api";

const initialForm = {
  firstName: "",
  lastName: "",
  countryIso: "US",
  phone: "",
  email: "",
  service: "Services",
  details: "",
};

const sanitizeName = (value) => value.replace(/[^a-zA-Z\s'-]/g, "");
const ContactSection = ({ id = "contact" }) => {
  const [formData, setFormData] = useState(initialForm);

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
      formId: "website-contact",
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      whatsapp: formData.phone,
      service: formData.service,
      subject: `Website inquiry - ${formData.service}`,
      message: formData.details,
    };

    const response = await axios.post(CONTACT_API_URL, contactPayload);

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
    <section id={id} className="contact-section">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-left">
          <h2>
            Ready to <span>Dominate?</span>
          </h2>

          <p>
            Schedule a strategy session with our founders.
            We'll map out the exact architecture needed
            to scale your vision.
          </p>

          <div className="call-card">
            <div className="call-header">
              <div className="icon-box">
                <FaCalendarAlt />
              </div>

              <div>
                <h3>Discovery Call</h3>
                <span>with Founders</span>
              </div>
            </div>

            <hr />

            <div className="call-info">
              <p>
                <FaVideo />
                Google Meet / Zoom
              </p>

              <p>
                <FaClock />
                30 Minutes
              </p>
            </div>

            <button className="calendar-btn">
              Open Calendar
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-box">
          <h3>Or send us a message</h3>

         <form onSubmit={handleSubmit}>

  {/* First + Last Name Row */}

  <div className="name-row">
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

  {/* Phone Number */}

  <div className="phone-row">
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

  {/* Email */}

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Work Email"
    autoComplete="email"
    required
  />

  {/* Budget */}

  <select
    name="service"
    value={formData.service}
    onChange={handleChange}
    required
  >
    <option value="Services" disabled>Services</option>
    <option>AI Agents</option>
    <option>Custom Websites</option>
    <option>WordPress & Shopify Stores</option>
    <option>Mobiles Apps for IOS & Android</option>
    <option>SEO</option>
    <option>APIs Integrations</option>
    <option>Graphics 2D & 3D</option>


  </select>

  <textarea
    name="details"
    value={formData.details}
    onChange={handleChange}
    placeholder="Project Details"
    required
  ></textarea>

  <button
    type="submit"
    className="send-btn"
  >
    Send Request ✈
  </button>

</form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
