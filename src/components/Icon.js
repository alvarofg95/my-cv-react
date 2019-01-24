import React from 'react';

export default ({ small = false, src, link = null }) =>
  link ? (
    <a href={link} target="blank">
      {' '}
      <img width={small ? '25' : '75'} src={src} />
    </a>
  ) : (
    <img width={small ? '25' : '50'} src={src} />
  );
