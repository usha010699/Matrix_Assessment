import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        {/* Left section */}
        <div className="footer-section">
          <h3 className="logo">ABOUT US</h3>
          <p>

Matrix™ is a boutique risk management firm that provides operational intelligence, bespoke security risk & facilities management with utmost discretion to select clientele.

      </p>
        </div>

        {/* Quick links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            
            <li><a href="/Services">Services</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@ssc.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;