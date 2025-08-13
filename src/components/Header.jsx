import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Debounce scroll handler
    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.newspaper-nav') && !event.target.closest('.newspaper-menu-btn')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Debounce helper function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  return (
    <header className={`newspaper-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="newspaper-header__container">
        <div className="newspaper-masthead">
          <a href="/" className="newspaper-logo" aria-label="Home">
            <span className="newspaper-name">THE DAILY DEVELOPER</span>
            <span className="newspaper-tagline">EST. 2024 • VOL. 1, NO. 1</span>
          </a>
        </div>

        <nav 
          className={`newspaper-nav ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          <div className="newspaper-nav__sections">
            {[
              { section: "FRONT PAGE", label: "About", href: "#about" },
              { section: "BUSINESS", label: "Projects", href: "#projects" },
              { section: "CLASSIFIEDS", label: "Contact", href: "#contact" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="newspaper-nav__link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-section">{item.section}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            ))}
          </div>
          <a
            href="https://docs.google.com/document/d/1ET5xg6jlWvnxJa6-Iq57TnyWF6juU_q81vYdDMI_aaA/edit?usp=sharing"
            className="newspaper-nav__cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
          >
            <span className="cta-label">EXTRA! EXTRA!</span>
            <span className="cta-text">View Resume</span>
          </a>
        </nav>

        <button
          className={`newspaper-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-label">MENU</span>
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);