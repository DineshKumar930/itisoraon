// src/components/Footer.jsx
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand-icon">
              < img src="images/kausalbalam.png" width="60" height="60" />
              
            </div>
            <div>
              <h4>राजकीय औद्योगिक प्रशिक्षण संस्थान, सोरांव, प्रयागराज</h4>
              <p>Operated by CSC SPV under Public-Private Partnership (PPP) Model</p>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Subscribe to Newsletter</h4>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>
                <span className="icon">🏛️</span> Quick Links
              </h4>
              <ul>
                <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/trades">Trades</Link></li>
  <li><Link to="/gallery">Gallery</Link></li>
  <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>
                <span className="icon">📋</span> Students
              </h4>
              <ul>
             <li><Link to="/admission">Admission Process</Link></li>
  <li><a href="https://scholarship.up.gov.in/" target="_blank">Scholarship</a></li>
  <li><Link to="/about">Placement Cell</Link></li>
  <li><Link to="/">Alumni Network</Link></li>
  <li><Link to="/">Student Portal</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>
                <span className="icon">📌</span> Resources
              </h4>
              <ul>
                <li><Link to="/news">News & Notice</Link></li>
                <li><Link to="/news">Academic Calendar</Link></li>
 <li><a href="images/fee.pdf" target="_blank"  rel="noopener noreferrer" download>Fee Structure</a></li>
                <li><a href="images/broch.pdf" target="_blank"  rel="noopener noreferrer" download>Download Brochure</a></li>
  
              </ul>
            </div>

            <div className="footer-col footer-contact">
              <h4>
                <span className="icon">📞</span> Get in Touch
              </h4>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📍</span>
                  <span>Nahar Dadauli Soroan Prayagraj 212502 Uttar Pradesh India.</span>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <span>+91 70070 11891</span>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <span>igiti473@gmail.com</span>
                </li>
                <li>
                  <span className="contact-icon">🕐</span>
                  <span>Mon-Sat: 9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms of Use</a>
              <span className="separator">|</span>
              <a href="#">Disclaimer</a>
            </div>
          </div>

          <div className="footer-copyright">
  <p>
    © {new Date().getFullYear()} Government ITI Soraon. All Rights Reserved.
  </p>

  <p className="partner-text">
    Operated by CSC SPV under Public-Private Partnership (PPP) Model
  </p>

  <p className="developer-text">
    Developed & Designed by{" "}
    <a
      href="https://dkwebsoft.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      dkwebsoft
    </a>
  </p>
</div>
        </div>
      </div>
    </footer>
  );
}
