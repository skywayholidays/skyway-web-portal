import React from "react";
import "./HeroSection.css"; // Import CSS file
import Button from "./Button"; // Import Button component

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text ">
          <h1 className="font-semibold text-4xl">Welcome to Our Website</h1>
          <p>Your journey to excellence starts here. Let us help you achieve your dreams.</p>
          <Button addClass="secondaryBtn">
              Get Started
            </Button>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <Button>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
