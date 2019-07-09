import React from 'react';
import { PROJECTS } from '../utils/constants';

export default () => (
  <div id="projectsContainer">
    <h1>Mis Proyectos</h1>
    <div className="projectCanvas">
      {PROJECTS.map((project, i) => (
        <div key={`project_${i}`}>
          <a
            href={project.link}
            target="blank"
            className="projectItem"
            style={{ backgroundColor: project.background, color: project.color }}
          >
            {project.title}
          </a>
        </div>
      ))}
    </div>
  </div>
);
