// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.nav-bar') && !e.target.closest('.hamburger')) {
        setMenuOpen(false);
        // Auto scroll to top when closing menu
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Handle menu item click - auto scroll to top
  const handleMenuClick = () => {
    setMenuOpen(false);
    // Auto scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className={`header ${sticky ? 'sticky' : ''}`}>
        <div className="top-bar">
          <div className="logo-left">
            <img src='/images/kausalbalam.png' alt="College Logo" />
          </div>

          <div className="title-group">
            <h1>राजकीय औद्योगिक प्रशिक्षण संस्थान, सोरांव, प्रयागराज</h1>
            <span>Operated by CSC SPV under Public-Private Partnership (PPP) Model</span>
          </div>

          <div className="logo-right">
            <img src='/images/cscspv.png' alt="CSC SPV Logo" />
          </div>
        </div>

        <nav className="nav-bar">
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" onClick={handleMenuClick}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleMenuClick}>About</NavLink></li>
            <li><NavLink to="/trade" onClick={handleMenuClick}>Trade</NavLink></li>
            <li><NavLink to="/admission" onClick={handleMenuClick}>Admission</NavLink></li>
            <li><NavLink to="/gallery" onClick={handleMenuClick}>Gallery</NavLink></li>
            <li><NavLink to="/experts" onClick={handleMenuClick}>Our Experts</NavLink></li>
            <li><NavLink to="/news" onClick={handleMenuClick}>News & Notice</NavLink></li>
            <li><NavLink to="/contact" onClick={handleMenuClick}>Contact</NavLink></li>
          </ul>

          <div className="nav-cta">
            <NavLink to="/admission" className="cta-button">Apply Now</NavLink>
          </div>
        </nav>
      </header>

      {/* Overlay for mobile menu - outside header */}
      {menuOpen && <div className="menu-overlay" onClick={handleMenuClick}></div>}
    </>
  );
}