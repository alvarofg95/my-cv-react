import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Language = ({ language, onChange }) => (
  <Icon
    className="flag"
    src={language === 'spanish' ? '/img/spain.svg' : '/img/united-kingdom.svg'}
    title={language === 'spanish' ? 'Cambiar a inglés' : 'Change to Spanish'}
    small
    onClick={() => onChange(language)}
  />
);

Language.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Language;
