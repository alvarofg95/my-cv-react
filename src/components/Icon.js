import React from 'react';
import { NOMBRE } from '../utils/constants';

export default ({ small = false, src, link = null, className = null, title = null, onClick }) =>
  link ? (
    <a href={link} target="blank">
      {' '}
      <img width={small ? '25' : '75'} src={src} className={className} title={title} alt={NOMBRE} onClick={onClick} />
    </a>
  ) : (
    <img width={small ? '25' : '50'} src={src} className={className} title={title} alt={NOMBRE} onClick={onClick} />
  );
