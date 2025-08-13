import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: <RiMailLine className="np-contact__info-icon" aria-hidden="true" />,
      label: "TELEGRAPH ADDRESS",
      value: "me@developer.com",
      type: "email"
    },
    {
      icon: <RiPhoneLine className="np-contact__info-icon" aria-hidden="true" />,
      label: "TELEPHONE",
      value: "+1 (555) 123-4567",
      type: "tel"
    },
    {
      icon: <RiMapPinLine className="np-contact__info-icon" aria-hidden="true" />,
      label: "LOCATION",
      value: "San Francisco, CA",
      type: "text"
    }
  ];

  const socialLinks = [
    { name: "GITHUB", url: "https://github.com/jackwine0" },
    { name: "LINKEDIN", url: "#" },
    { name: "TWITTER", url: "#" }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="np-contact"
      aria-labelledby="contact-heading"
    >
      <div className="np-contact__container">
        {/* Newspaper Section Header */}
        <header className="np-contact__header">
          <h2 id="contact-heading" className="np-contact__title">
            <span className="np-contact__kicker">CLASSIFIED SECTION</span>
            <span className="np-contact__headline">CONTACT THE EDITOR</span>
          </h2>
          <div className="np-contact__divider" aria-hidden="true"></div>
          <p className="np-contact__subhead">
            Submit your inquiries using the form below or through our direct channels
          </p>
        </header>

        <div className="np-contact__columns">
          {/* Left Column - Contact Info */}
          <div className={`np-contact__info-col ${isVisible ? 'np-contact__info-col--visible' : ''}`}>
            <article className="np-contact__info-block" aria-labelledby="contact-info-heading">
              <h3 id="contact-info-heading" className="np-contact__info-heading">CORRESPONDENCE DETAILS</h3>
              
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className={`np-contact__info-item ${isVisible ? `np-contact__info-item--delay-${index + 1}` : ''}`}
                >
                  {info.icon}
                  <div>
                    <p className="np-contact__info-label">{info.label}</p>
                    <a 
                      href={info.type === 'email' ? `mailto:${info.value}` : info.type === 'tel' ? `tel:${info.value.replace(/\D/g, '')}` : '#'}
                      className="np-contact__info-value"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </article>

            <aside 
              className={`np-contact__social ${isVisible ? 'np-contact__social--delay-4' : ''}`}
              aria-labelledby="social-heading"
            >
              <h3 id="social-heading" className="np-contact__social-heading">WIRE SERVICES</h3>
              <div className="np-contact__social-buttons">
                {socialLinks.map(link => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    className="np-contact__social-btn"
                    aria-label={`Visit my ${link.name} profile`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </aside>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`np-contact__form-col ${isVisible ? 'np-contact__form-col--visible' : ''}`}>
            <form 
              id="contact-form" 
              className="np-contact__form"
              ref={formRef}
              onSubmit={handleSubmit}
              aria-labelledby="contact-form-heading"
            >
              <h3 id="contact-form-heading" className="sr-only">Contact Form</h3>
              
              <div className="np-contact__form-group">
                <label htmlFor="name" className="np-contact__form-label">YOUR NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="np-contact__form-input" 
                  placeholder="Enter your full name" 
                  required 
                  aria-required="true"
                />
              </div>

              <div className="np-contact__form-group">
                <label htmlFor="email" className="np-contact__form-label">WIRE ADDRESS</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="np-contact__form-input" 
                  placeholder="your@email.com" 
                  required 
                  aria-required="true"
                />
              </div>

              <div className="np-contact__form-group">
                <label htmlFor="subject" className="np-contact__form-label">SUBJECT MATTER</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="np-contact__form-input" 
                  placeholder="Nature of your inquiry" 
                  required 
                  aria-required="true"
                />
              </div>

              <div className="np-contact__form-group">
                <label htmlFor="message" className="np-contact__form-label">MESSAGE TEXT</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="np-contact__form-textarea" 
                  placeholder="Compose your message here..." 
                  required
                  aria-required="true"
                ></textarea>
              </div>

              <button type="submit" className="np-contact__form-submit">
                <span>TRANSMIT MESSAGE</span>
                <RiSendPlaneFill className="np-contact__submit-icon" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);