import React from 'react';
import { EDUCATION_SPANISH, EDUCATION_ENGLISH } from '../utils/constants';

export default ({ language }) => {
  const education = language === 'spanish' ? EDUCATION_SPANISH : EDUCATION_ENGLISH;
  return (
    <div>
      <h3>Educación</h3>
      {education.map((item, i) => (
        <div key={`education${i}`}>
          <a href={item.slug} target="blank" className="itemName">
            <b>{item.school}</b>
          </a>
          <h6>{item.duration}</h6>
        </div>
      ))}
    </div>
  );
};
