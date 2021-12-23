import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="main-wrap">
      <div class="footer-wrap">
        <div class="footer-wrap-1">
          <div class="footer-section">
            <h1>About</h1>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Pricing</a>
            <a href="#">Careers</a>
          </div>
          <div class="footer-section">
            <h1>Resources</h1>
            <a href="#">Docs</a>
            <a href="#">Blog</a>
            <a href="#">eBooks</a>
            <a href="#">Videos</a>
          </div>
          <div class="footer-section">
            <h1>Contact</h1>
            <a href="#">Help</a>
            <a href="#">Sales</a>
            <a href="#">Advertise</a>
          </div>
          <div class="footer-section">
            <h1>Stay Connected</h1>
            <p>Subscribe to our newsletter to receive latest news.</p>
            <form action="">
              <input refs="email" type="email" name="email" id="email" size="30" placeholder="Enter Email Address" />
              <button type="submit" class="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="footer-wrap-2">
          <div class="line"></div>
          <div class="social-link">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="first-box">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="last-box">
          <a href="#">&copy; Copyright 2021 SentraBatik</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
