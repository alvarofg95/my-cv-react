import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ tagName }) => <span className="tag">{tagName}</span>;

Tag.propTypes = {
  tagName: PropTypes.string.isRequired
};

export default Tag;
