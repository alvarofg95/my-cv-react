import React from 'react';
import { PROJECTS } from '../utils/constants';

export default () => (
    <div id="projectsContainer">
        <h1>Mis Proyectos</h1>
        <div>
            {PROJECTS.map(project => (
                <div>
                    <a href={project.link} target="blank">{project.title}</a>
                </div>
            ))}
        </div>
    </div>
);
