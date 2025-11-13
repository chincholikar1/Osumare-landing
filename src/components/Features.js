import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-heading">
        <h3>
          Transform Your Productivity with Our <br />
          Innovative Demo Features
        </h3>
      </div>

      <div className="features-container">
        <div className="feature-box">
          <div className="icon">🚀</div>
          <h3>Transform Your Productivity with Our</h3>
          <p>Innovative Demo Features.</p>
        </div>

        <div className="feature-box">
          <div className="icon">📤</div>
          <h3>Fast Performance</h3>
          <p>Experience lightning-fast load times and smooth user interaction..</p>
        </div>

        <div className="feature-box">
          <div className="icon">🤝</div>
          <h3>Effortless Collaboration</h3>
          <p>Work together effortlessly with our intuitive team tools.</p>
        </div>

        <div className="feature-box">
          <div className="icon">💼</div>
          <h3>Smart Insights</h3>
          <p>Gain valuable insights with our intelligent data-driven solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
