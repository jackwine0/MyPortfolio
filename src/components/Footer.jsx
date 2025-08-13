import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const socialLinks = [
    {
      icon: <RiGithubFill className="np-footer__social-icon" aria-hidden="true" />,
      label: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      icon: <RiLinkedinBoxFill className="np-footer__social-icon" aria-hidden="true" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourusername"
    },
    {
      icon: <RiMailLine className="np-footer__social-icon" aria-hidden="true" />,
      label: "Email",
      url: "mailto:youremail@example.com"
    }
  ];

  const navLinks = [
    { label: "Front Page", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Classifieds", href: "#contact" },
    { label: "Full Archive", href: "https://drive.google.com/file/d/1EKvVJg4lVDwFIX-wWnDBqWOawnrWPNNw/view?usp=sharing", external: true }
  ];

  return (
    <footer 
      ref={footerRef} 
      className="np-footer" 
      aria-labelledby="footer-heading"
    >
      <div className={`np-footer__container ${isVisible ? "np-footer__container--visible" : ""}`}>
        
        {/* Newspaper Footer Header */}
        <header className="np-footer__header">
          <h2 id="footer-heading" className="np-footer__title">THE DAILY DEVELOPER</h2>
          <p className="np-footer__edition">Evening Edition • {currentDate}</p>
        </header>

        {/* Footer Columns */}
        <div className="np-footer__columns">
          {/* About Column */}
          <section className="np-footer__about" aria-labelledby="about-heading">
            <h3 id="about-heading" className="np-footer__column-title">ABOUT THE AUTHOR</h3>
            <p className="np-footer__description">
              Akande Samuel, a frontend developer specializing in crafting performant web experiences. 
              Currently expanding into backend systems. Published in multiple technical journals.
            </p>
            <div className="np-footer__socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('http') ? "_blank" : undefined}
                  rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="np-footer__social-link"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </section>

          {/* Quick Links Column */}
          <nav className="np-footer__links" aria-labelledby="sections-heading">
            <h3 id="sections-heading" className="np-footer__column-title">SECTIONS</h3>
            <ul className="np-footer__links-list">
              {navLinks.map((link) => (
                <li key={link.label} className="np-footer__links-item">
                  <a 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="np-footer__link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Column */}
          <section className="np-footer__contact" aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="np-footer__column-title">CORRESPONDENCE</h3>
            <address className="np-footer__address">
              <p className="np-footer__contact-item">
                <span className="np-footer__contact-label">Telegraph:</span> 
                <a href="mailto:youremail@example.com">youremail@example.com</a>
              </p>
              <p className="np-footer__contact-item">
                <span className="np-footer__contact-label">Telephone:</span> 
                <a href="tel:+1234567890">+123 456 7890</a>
              </p>
              <p className="np-footer__contact-item">
                <span className="np-footer__contact-label">Dispatch:</span> Lagos, Nigeria
              </p>
            </address>
          </section>
        </div>
      </div>

      {/* Newspaper Footer Bottom */}
      <div className={`np-footer__bottom ${isVisible ? "np-footer__bottom--visible" : ""}`}>
        <p className="np-footer__copyright">
          © {new Date().getFullYear()} The Daily Developer. All rights reserved. 
          <span className="np-footer__volume">Vol. 1, No. 1</span>
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);