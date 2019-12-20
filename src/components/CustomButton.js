import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ text, type, onClick = null }) => (
  <button type={type} onClick={onClick}>
    {text}
  </button>
);

CustomButton.defaultProps = {
  text: 'TEXTO',
  type: 'text'
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default CustomButton;
