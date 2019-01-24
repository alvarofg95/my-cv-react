import React from 'react';
import { EDUCATION } from '../utils/constants';

export default () => (
  <div>
    <h3>Educación</h3>
    {EDUCATION.map((item, i) => (
      <div key={`education${i}`}>
        <a href={item.slug} target="blank" className="itemName">
          <b>{item.school}</b>
        </a>
        <h6>{item.duration}</h6>
      </div>
    ))}
  </div>
);
