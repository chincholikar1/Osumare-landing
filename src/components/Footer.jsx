import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">Demo</h2>
          <p>Subscribe to our newsletter for latest updates.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email here" required />
            <button type="submit">Join</button>
          </form>
        </div>

        <div className="footer-links">
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home Page</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog Posts</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">User Guide</a></li>
              <li><a href="#">Community Forum</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <h4>Connect With Us</h4>
          <ul className="social-icons">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Osumare. All rights reserved.</p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a> |
          <a href="#">Terms of Service</a> |
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
