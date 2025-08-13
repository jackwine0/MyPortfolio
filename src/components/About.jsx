import React from "react";
import { RiReactjsLine, RiNodejsLine, RiHtml5Line, RiCss3Line } from "react-icons/ri";
import { SiVite, SiJavascript, SiSass, SiMongodb, SiExpress } from "react-icons/si";
import "./About.css";

const About = () => {
  const currentSkills = [
    { icon: <SiVite className="classified-icon" />, name: "Vite" },
    { icon: <RiReactjsLine className="classified-icon" />, name: "React" },
    { icon: <SiJavascript className="classified-icon" />, name: "JavaScript" },
    { icon: <RiHtml5Line className="classified-icon" />, name: "HTML5" },
    { icon: <RiCss3Line className="classified-icon" />, name: "CSS3" },
    { icon: <SiSass className="classified-icon" />, name: "SCSS" }
  ];

  const learningSkills = [
    { icon: <RiNodejsLine className="bulletin-icon" />, name: "Node.js" },
    { icon: <SiExpress className="bulletin-icon" />, name: "Express" },
    { icon: <SiMongodb className="bulletin-icon" />, name: "MongoDB" }
  ];

  return (
    <section className="newspaper-about" id="about" aria-labelledby="about-heading">
      <div className="newspaper-container">
        {/* Newspaper Section Header */}
        <header className="newspaper-section-header">
          <h2 id="about-heading" className="newspaper-section-title">
            <span className="section-kicker">DEVELOPER PROFILE</span>
            <span className="section-headline">ABOUT THE CODE ARTISAN</span>
          </h2>
          <div className="newspaper-divider" aria-hidden="true"></div>
        </header>

        {/* Main Content */}
        <div className="newspaper-columns">
          <div className="newspaper-column">
            <p className="newspaper-lead">
              <span className="drop-cap" aria-hidden="true">S</span>
              <span className="sr-only">S</span>AN FRANCISCO — In an exclusive interview with our tech correspondent, 
              <strong> Akande Samuel</strong> revealed his journey as a frontend developer crafting 
              modern digital experiences. "The web should be accessible to all," Samuel 
              stated, emphasizing his commitment to clean, responsive designs.
            </p>
            
            <p>
              While currently specializing in frontend technologies, our sources confirm 
              Samuel is expanding his expertise into backend systems, aiming to become 
              a full-stack developer by year's end. Industry analysts predict this move 
              will make him one of the most versatile developers in the Bay Area.
            </p>
          </div>
          
          <div className="newspaper-column">
            {/* Skills Section - Styled as Newspaper Classifieds */}
            <article className="newspaper-classifieds" aria-labelledby="skills-heading">
              <h3 id="skills-heading" className="classifieds-header">TECHNICAL SKILLS INVENTORY</h3>
              
              <div className="classifieds-grid" role="list">
                {currentSkills.map((skill, index) => (
                  <div key={index} className="classified-item" role="listitem">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Learning Section - Styled as Newspaper Bulletin */}
            <article className="newspaper-bulletin" aria-labelledby="learning-heading">
              <h3 id="learning-heading" className="bulletin-header">CURRENTLY IN DEVELOPMENT</h3>
              <div className="bulletin-grid" role="list">
                {learningSkills.map((skill, index) => (
                  <div key={index} className="bulletin-item" role="listitem">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);