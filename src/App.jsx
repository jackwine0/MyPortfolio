import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Add newspaper texture to body more efficiently
    const body = document.body;
    body.classList.add("np-body");
    
    // Cleanup on unmount
    return () => {
      body.classList.remove("np-body");
    };
  }, []);

  // Memoize the date to prevent unnecessary recalculations
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="np-app">
      {/* Newspaper Masthead */}
      <header className="np-masthead">
        <div className="np-masthead__container">
          <h1 className="np-masthead__title">THE DAILY DEVELOPER</h1>
          <time className="np-masthead__date" dateTime={new Date().toISOString()}>
            {currentDate}
          </time>
        </div>
      </header>

      {/* Newspaper Content */}
      <div className="np-newspaper">
        <Header />
        
        <main className="np-main">
          <div className="np-main__container">
            {/* Fold line effect */}
            <div className="np-fold-line" aria-hidden="true"></div>
            
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>

      {/* Newspaper Edge Effects */}
      <div className="np-edge np-edge--left" aria-hidden="true"></div>
      <div className="np-edge np-edge--right" aria-hidden="true"></div>
    </div>
  );
}