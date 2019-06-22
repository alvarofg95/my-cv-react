import React from 'react';
import { EXPERIENCE_SPANISH, EXPERIENCE_ENGLISH } from '../utils/constants';
import Tag from '../components/Tag';

export default ({ language }) => {
  const experience = language === 'spanish' ? EXPERIENCE_SPANISH : EXPERIENCE_ENGLISH;
  return (
  <div>
    <h3>Experiencia</h3>
    {experience.map((item, i) => (
      <div key={`experience${i}`}>
        <a href={item.slug} target="blank" className="itemName">
          <b>{item.company}</b>
        </a>
        <p className="itemDuration">{item.duration}</p>
        {item.technologies.map((tech, i) => (
          <Tag key={`tag${i}`} tagName={tech} />
        ))}
      </div>
    ))}
  </div>
)};
