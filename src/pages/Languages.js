import React from 'react';
import { LANGUAGES } from '../utils/constants';

export default () => (
  <div>
    <h3>Idiomas</h3>
    {LANGUAGES.map((item, i) => (
      <div key={`language${i}`}>
        <span>{item.language}: </span>
        <a href={item.slug} target="blank" className="itemName">
          <b>{item.certificate}</b>
        </a>
      </div>
    ))}
  </div>
);
