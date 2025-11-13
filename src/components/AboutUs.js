import React from "react";
import "./AboutUs.css";
import aboutImg from "../image/about.jpg";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Osumare</h2>
        <p>
          At Osumare, we deliver top-notch digital marketing services designed
          to help your business reach new heights. Our expert team focuses on
          performance-driven solutions that maximize ROI and brand visibility.
        </p>
        <button>Learn More</button>
      </div>
      <div className="about-image">
        <img src={aboutImg} alt="About Osumare" />
      </div>
    </section>
  );
};

export default AboutUs;
