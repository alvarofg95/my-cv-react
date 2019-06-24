import React from 'react';
import { EXPERIENCE_SPANISH } from '../utils/constants';
import ExperienceItem from '../components/ExperienceItem';

export default ({ language }) => {
  return (
    <div>
      <h3>Experiencia</h3>
      {EXPERIENCE_SPANISH.map((item, i) => (
        <ExperienceItem key={`experience-${i}`} item={item} />
      ))}
    </div>
  );
};
