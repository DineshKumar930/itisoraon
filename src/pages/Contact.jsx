// src/pages/Contact.jsx
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Reach out to us through any of the channels below.</p>
      </div>

      <div className="contact-wrapper">
        {/* Contact Details Grid */}
        <div className="contact-details">
          <div className="detail-card">
            <div className="icon">📍</div>
            <h4>Address</h4>
            <p>Government ITI Soravn, Soravn, India</p>
          </div>
          <div className="detail-card">
            <div className="icon">📞</div>
            <h4>Phone</h4>
            <p>+91 98765 43210</p>
          </div>
          <div className="detail-card">
            <div className="icon">✉️</div>
            <h4>Email</h4>
            <p>info@iti-soravn.edu</p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.735118595126!2d81.86887377409842!3d25.646915313341154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab998037a07bb%3A0x4dc2d25d9841cf0e!2sGovernment%20ITI!5e0!3m2!1sen!2sin!4v1784256094267!5m2!1sen!2sin" 
            width="100%" 
            height="350" 
            style={{ border: 0, borderRadius: '30px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Government ITI Soravn Location"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="form-section">
          <h3>Send us a Message</h3>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}