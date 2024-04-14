import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-col">
          <div className="footer-item">
            <a href="#">Getting Started</a>
          </div>
          <div className="footer-item">
            <a href="#">Style Guide</a>
          </div>
          <div className="footer-item">
            <a href="#">Licensing</a>
          </div>
          <div className="footer-item">
            <a href="#">Changelog</a>
          </div>
          <div className="footer-item">
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-item">
            <a href="#">Twitter</a>
          </div>
          <div className="footer-item">
            <a href="#">Dribbble</a>
          </div>
          <div className="footer-item">
            <a href="#">Behance</a>
          </div>
          <div className="footer-item">
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
