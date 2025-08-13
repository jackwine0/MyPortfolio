import React, { useState, useCallback } from "react";
import { RiExternalLinkLine, RiGithubLine, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import "./Projects.css";

const allProjects = [
  {
    title: "Todo",
    description: "A minimalist todo application with drag-and-drop functionality and cloud sync.",
    tech: ["React", "Firebase", "DnD"],
    liveLink: "https://todo-appxx.netlify.app/",
    codeLink: "https://github.com/jackwine0/Todo-App",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    published: "June 10, 2024"
  },
  {
    title: "SilverBank",
    description: "Finance management platform with budgeting tools and expense tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    liveLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    published: "May 25, 2024"
  },
  {
    title: "THE REGISTRY - Central Intelligence Archive",
    description: "A cyberpunk-inspired intelligence dashboard showcasing agent dossiers, threat assessments, and classified data visualization. Built with React, this immersive UI simulates a high-security intelligence terminal.",
    tech: ["React.js", "Vite", "API Integration"],
    liveLink: "https://registry-khaki.vercel.app/",
    codeLink: "https://github.com/jackwine0/Registry",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    published: "April 18, 2024"
  },
  {
    title: "SleekTV",
    description: "Netflix clone with personalized recommendations and watchlists.",
    tech: ["React", "Firebase", "TMDB API"],
    liveLink: "https://sleek-tv.vercel.app/login",
    codeLink: "https://github.com/jackwine0/Sleek-TV",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    published: "March 30, 2024"
  },
  {
    title: "Acacia Xone",
    description: "Webnovel platform for Christian readers and writers with community features.",
    tech: ["Next.js", "MongoDB", "Stripe"],
    liveLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    published: "February 12, 2024"
  },
  {
    title: "StaffSync",
    description: "Employee management system with scheduling and performance tracking.",
    tech: ["React", "QR scanner", "Node.js"],
    liveLink: "https://staff-sync-iota.vercel.app/",
    codeLink: "https://github.com/jackwine0/StaffSync",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    published: "January 8, 2024"
  },
  {
    title: "Portfolio",
    description: "Newspaper-themed developer portfolio showcasing projects and skills.",
    tech: ["React", "CSS", "Framer Motion"],
    liveLink: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    published: "December 1, 2023"
  },
  {
    title: "MedLink",
    description: "Medical appointment system with queue management and telehealth features.",
    tech: ["React Native", "Node.js", "MongoDB"],
    liveLink: "https://medlink-beta.vercel.app/",
    codeLink: "https://github.com/jackwine0/Medlink",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    published: "November 15, 2023"
  }
];

const PROJECTS_PER_PAGE = 4;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const projects = allProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePrevPage = useCallback(() => {
    setCurrentPage(p => Math.max(1, p - 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage(p => Math.min(totalPages, p + 1));
  }, [totalPages]);

  return (
    <section id="projects" className="newspaper-projects" aria-labelledby="projects-heading">
      <div className="newspaper-container">
        <header className="newspaper-section-header">
          <h2 id="projects-heading" className="newspaper-section-title">
            <span className="section-kicker">TECHNOLOGY CHRONICLE</span>
            <span className="section-headline">RECENT DEVELOPMENTS</span>
          </h2>
          <div className="newspaper-divider" aria-hidden="true"></div>
          <p className="section-subhead">
            Featured projects as reported by industry publications
          </p>
        </header>

        <div className="newspaper-grid" role="list">
          {projects.map((project, index) => (
            <article 
              className="newspaper-card" 
              key={project.title}
              role="listitem"
              aria-labelledby={`project-${startIndex + index}-title`}
            >
              <div className="card-header">
                <time className="card-date" dateTime={new Date(project.published).toISOString()}>
                  {project.published}
                </time>
                <h3 id={`project-${startIndex + index}-title`} className="card-title">
                  {project.title}
                </h3>
              </div>
              
              <img 
                src={`${project.image}&fm=webp&q=80`} 
                alt="" 
                className="card-image" 
                loading="lazy"
                decoding="async"
                width="400"
                height="180"
              />
              
              <div className="card-content">
                <p className="card-description">{project.description}</p>
                
                <div className="card-tech" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="card-links">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-link"
                    aria-label={`View ${project.title} live demo (opens in new tab)`}
                  >
                    <RiExternalLinkLine aria-hidden="true" /> Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-link"
                    aria-label={`View ${project.title} source code (opens in new tab)`}
                  >
                    <RiGithubLine aria-hidden="true" /> Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="newspaper-pagination">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="pagination-button"
            aria-label="Previous page"
          >
            <RiArrowLeftLine aria-hidden="true" />
          </button>
          
          <span className="page-indicator">
            Page <span aria-current="page">{currentPage}</span> of {totalPages}
          </span>
          
          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
            aria-label="Next page"
          >
            <RiArrowRightLine aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}