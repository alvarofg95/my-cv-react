import React from 'react';
import { EXPERIENCE } from '../utils/constants';
import Tag from '../components/Tag';

export default () => (
  <div>
    <h3>Experiencia</h3>
    {EXPERIENCE.map((item, i) => (
      <div key={`experience${i}`}>
        <a href={item.slug} target="blank" className="itemName">
          <b>{item.company}</b>
        </a>
        <h6>{item.duration}</h6>
        {item.technologies.map((tech, i) => (
          <Tag key={`tag${i}`} tagName={tech} />
        ))}
      </div>
    ))}
  </div>
);
