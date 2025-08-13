import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase();

  return (
    <section className="newspaper-hero" aria-labelledby="hero-headline">
      <div className={`newspaper-hero__container ${isVisible ? 'is-visible' : ''}`}>
        {/* Newspaper Headline */}
        <div className="newspaper-headline">
          <div className="newspaper-date-line">
            <time className="newspaper-date" dateTime={new Date().toISOString()}>
              {currentDate}
            </time>
            <span className="newspaper-price">PRICE 25¢</span>
          </div>
          
          <h1 id="hero-headline" className="newspaper-main-headline">
            <span className="headline-kicker">EXCLUSIVE PROFILE:</span>
            <span className="headline-main">AKANDE SAMUEL</span>
            <span className="headline-sub">RISING STAR IN WEB DEVELOPMENT</span>
          </h1>
        </div>

        {/* Byline and Dateline */}
        <div className="newspaper-byline">
          <span className="byline">By Tech Correspondent</span>
          <span className="dateline">SAN FRANCISCO</span>
        </div>

        {/* Newspaper Columns */}
        <div className="newspaper-columns">
          <div className="newspaper-column">
            <p className="newspaper-lead">
              <span className="drop-cap" aria-hidden="true">A</span>
              <span className="sr-only">A</span>kande Samuel, a promising frontend developer, 
              is making waves in the tech industry with his clean, modern designs 
              and commitment to accessibility standards. Sources close to the 
              developer report he's currently expanding his skills into backend 
              technologies.
            </p>
            
            <p>
              "The web should be accessible to everyone," Samuel was quoted saying 
              during a recent interview. His projects reportedly emphasize performance 
              and user experience, with several high-profile clients already in his 
              portfolio.
            </p>
          </div>
          
          <div className="newspaper-column">
            <p>
              Colleagues describe Samuel as "meticulous" and "innovative," with 
              a particular talent for translating complex requirements into intuitive 
              interfaces. Industry analysts predict he'll be a major player in the 
              full-stack development space within the next two years.
            </p>
            
            <div className="newspaper-cta">
              <aside className="newspaper-box" aria-label="Developer's Skills">
                <h3 className="box-heading">DEVELOPER'S SKILLS</h3>
                <ul className="box-list">
                  {['React & Next.js', 'Accessibility (WCAG)', 'Performance Optimization', 'UI/UX Design'].map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </aside>
              
              <div className="newspaper-buttons">
                <a href="#projects" className="newspaper-btn newspaper-btn--primary">
                  CONTINUE READING →
                  <span className="sr-only"> about Akande Samuel's projects</span>
                </a>
                <a href="https://docs.google.com/document/d/1ET5xg6jlWvnxJa6-Iq57TnyWF6juU_q81vYdDMI_aaA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="newspaper-btn newspaper-btn--secondary">
                  FULL BIOGRAPHY ↓
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);