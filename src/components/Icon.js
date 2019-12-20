import React from 'react';
import PropTypes from 'prop-types';
import { NOMBRE } from '../utils/constants';

const Icon = ({
  width,
  small = false,
  src,
  link = null,
  className = null,
  title = null,
  onClick
}) =>
  link ? (
    <a href={link} target="blank">
      <img
        width={width ? width : small ? '25' : '75'}
        src={src}
        className={className}
        title={title}
        alt={NOMBRE}
        onClick={onClick}
      />
    </a>
  ) : (
    <img
      width={width ? width : small ? '25' : '75'}
      src={src}
      className={className}
      title={title}
      alt={NOMBRE}
      onClick={onClick}
    />
  );

Icon.defaultProps = {
  small: false,
  link: null,
  className: null,
  title: null
};

Icon.propTypes = {
  width: PropTypes.number,
  small: PropTypes.bool,
  src: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default Icon;
