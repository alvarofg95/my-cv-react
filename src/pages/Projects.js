import React from 'react';
import { PROJECTS } from '../utils/constants';
import { withTranslation } from 'react-i18next';

const Projects = ({ t }) => (
  <div id="projectsContainer">
    <h1>{t('projects.title')}</h1>
    <div className="projectCanvas">
      {PROJECTS.map(({ link, background, color, title }, i) => (
        <a
          key={`project_${i}`}
          href={link}
          target="blank"
          className="projectItem"
          style={{ backgroundColor: background, color }}
        >
          {title}
        </a>
      ))}
    </div>
  </div>
);

export default withTranslation()(Projects);
