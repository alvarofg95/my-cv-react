import React from 'react';
import { EDUCATION_SPANISH } from '../utils/constants';

export default ({ language }) => {
  return (
    <div>
      <h3>Educación</h3>
      {EDUCATION_SPANISH.map((item, i) => (
        <div key={`education${i}`}>
          <a href={item.slug} target="blank" className="itemName">
            <b>{item.school}</b>
          </a>
          <p className="itemDuration">{item.duration}</p>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
