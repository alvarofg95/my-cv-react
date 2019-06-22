import React from 'react';
import { PROJECTS } from '../utils/constants';

export default () => (
    <div id="projectsContainer">
        <h1>Proyectos personales</h1>
        <div>
            {PROJECTS.map(project => (
                <div>
                    <a href={project.link} target="blank">{project.title}</a>
                </div>
            ))}
        </div>
    </div>
);
