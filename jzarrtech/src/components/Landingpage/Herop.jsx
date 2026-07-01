import React from "react";
import "./Herop.css";
import { ContactMessageForm } from "../ContactSection";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            WE DON'T PROMISE RESULTS
            <br />
            <span>WE DELIVER THEM.</span>
          </h1>

         
          
        </div>

        <div className="hero-right" id="contact">
          <ContactMessageForm
            className="hero-contact-form"
            title="No Empty Guarantees - Just Proven Strategies"
            subtitle="that drive sales, growth and long-term success."
            formId="website-landing-hero"
            submitLabel="Send Request ->"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
