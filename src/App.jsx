import React, { useState, useEffect, useMemo } from 'react';
import projects from './projects.json';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme, setTheme] = useState('light');
  const [cardHeight, setCardHeight] = useState(350);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.projects.length) % projects.projects.length);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Calculate the maximum description height
  const maxDescriptionHeight = useMemo(() => {
    const tempElement = document.createElement('div');
    tempElement.style.position = 'absolute';
    tempElement.style.visibility = 'hidden';
    tempElement.style.whiteSpace = 'pre-wrap';
    tempElement.style.width = '200px'; // Approximate card width
    tempElement.style.fontSize = '0.9rem';
    tempElement.style.lineHeight = '1.3';
    document.body.appendChild(tempElement);

    let maxHeight = 0;
    projects.projects.forEach(project => {
      tempElement.textContent = project.summary;
      const height = tempElement.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });

    document.body.removeChild(tempElement);
    return maxHeight;
  }, []);

  // Calculate card height based on max description height
  useEffect(() => {
    const baseHeight = 350; // Base height without description
    const padding = 16; // Vertical padding
    const newHeight = baseHeight + maxDescriptionHeight + padding;
    setCardHeight(newHeight);
  }, [maxDescriptionHeight]);

  const getProjectPosition = (index) => {
    const totalProjects = projects.projects.length;
    const relativeIndex = (index - currentIndex + totalProjects) % totalProjects;

    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1) return 'right';
    if (relativeIndex === totalProjects - 1) return 'left';
    return 'hidden';
  };

  return (
    <div className="container">
      <header>
        <h1>Alec Grater-Cafiero</h1>
        <p>Contact: <a href="mailto:alecgrater@gmail.com">alecgrater@gmail.com</a></p>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      <div className="project-carousel" style={{ height: cardHeight + 50 }}>
        {projects.projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${getProjectPosition(index)}`}
            style={{ height: cardHeight }}
            onClick={() => window.open(project.url, '_blank')}
            role="button"
            tabIndex={0}
            aria-label={`View ${project.title}`}
          >
            <h2>{project.title}</h2>
            <div className="project-logo-container">
              <img
                src={project.logo}
                alt={`${project.title} Logo`}
                className="project-logo"
              />
            </div>
            <p className="project-summary">{project.summary}</p>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button onClick={prevProject} aria-label="Previous project">
          &larr; Previous
        </button>
        <button onClick={nextProject} aria-label="Next project">
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default App;
