// Projects.js
import React from 'react';
import ProjectList from '../components/ProjectList';

function Projects() {
  return (
      <div>
        <h2>AI/ML Projects</h2>
        <ProjectList category="AI/ML" />
        <h2>Software Engineering Projects</h2>
        <ProjectList category="Software Engineering" />
      </div>
  );
}

export default Projects;
