import React from 'react';
import Icon from './Icon';

export default ({ language, onChange }) => (
  <Icon
    className="flag"
    src={language === 'spanish' ? '/img/spain.svg' : '/img/united-kingdom.svg'}
    title={language === 'spanish' ? 'Cambiar a inglés' : 'Change to Spanish'}
    small
    onClick={() => onChange(language)}
  />
);
