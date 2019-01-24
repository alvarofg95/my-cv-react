import React from 'react';
import { NOMBRE } from '../utils/constants';

export default ({ small = false, src, link = null }) =>
  link ? (
    <a href={link} target="blank">
      {' '}
      <img width={small ? '25' : '75'} src={src} alt={NOMBRE} />
    </a>
  ) : (
    <img width={small ? '25' : '50'} src={src} alt={NOMBRE} />
  );
