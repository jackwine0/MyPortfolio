import React from "react";
import {
  RiReactjsLine,
  RiNodejsLine,
  RiHtml5Line,
  RiCss3Line,
} from "react-icons/ri";
import {
  SiVite,
  SiJavascript,
  SiSass,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import "./About.css";

const About = () => {
  const currentSkills = [
    { icon: <SiVite className="classified-icon" />, name: "Vite" },
    { icon: <RiReactjsLine className="classified-icon" />, name: "React" },
    { icon: <SiJavascript className="classified-icon" />, name: "JavaScript" },
    { icon: <RiHtml5Line className="classified-icon" />, name: "HTML5" },
    { icon: <RiCss3Line className="classified-icon" />, name: "CSS3" },
    { icon: <SiSass className="classified-icon" />, name: "SCSS" },
  ];

  const learningSkills = [
    { icon: <RiNodejsLine className="bulletin-icon" />, name: "Node.js" },
    { icon: <SiExpress className="bulletin-icon" />, name: "Express" },
    { icon: <SiMongodb className="bulletin-icon" />, name: "MongoDB" },
  ];

  return (
    <section
      className="newspaper-about"
      id="about"
      aria-labelledby="about-heading"
    >
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
              <span className="drop-cap" aria-hidden="true">
                L
              </span>
              <span className="sr-only">L</span>AGOS — In a candid conversation
              with our tech desk,
              <strong>Akande Samuel</strong> shared his journey as a frontend
              developer shaping modern digital experiences. "The web should be
              accessible to all," Samuel remarked, underscoring his passion for
              clean, responsive design built with React.js, CSS, and SCSS.
            </p>

            <p>
              Though already recognized for his frontend expertise, Samuel is
              now broadening his skills into backend technologies, with MongoDB
              as a starting point. Observers note that this steady evolution
              positions him as an emerging full-stack talent, ready to bring
              complete, end-to-end solutions to the growing African tech scene.
            </p>
          </div>

          <div className="newspaper-column">
            {/* Skills Section - Styled as Newspaper Classifieds */}
            <article
              className="newspaper-classifieds"
              aria-labelledby="skills-heading"
            >
              <h3 id="skills-heading" className="classifieds-header">
                TECHNICAL SKILLS INVENTORY
              </h3>

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
            <article
              className="newspaper-bulletin"
              aria-labelledby="learning-heading"
            >
              <h3 id="learning-heading" className="bulletin-header">
                CURRENTLY IN DEVELOPMENT
              </h3>
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
