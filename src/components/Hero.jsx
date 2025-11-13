import React from "react";
import "./Hero.css";
import heroImg from "../image/01.jpg";

const Hero = ({ onGetStarted }) => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Osumare</h1>
          <p>Empowering your marketing journey with innovative solutions.</p>
          <button className="hero-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
