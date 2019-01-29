import React from 'react';
import { LANGUAGES_SPANISH, LANGUAGES_ENGLISH } from '../utils/constants';

export default ({ language }) => {
  const languages = language === 'spanish' ? LANGUAGES_SPANISH : LANGUAGES_ENGLISH;
  return (
    <div>
      <h3>Idiomas</h3>
      {languages.map((item, i) => (
        <div key={`language${i}`}>
          <span>{item.language}: </span>
          <a href={item.slug} target="blank" className="itemName">
            <b>{item.certificate}</b>
          </a>
        </div>
      ))}
    </div>
  );
};
