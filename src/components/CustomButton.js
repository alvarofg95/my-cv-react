import React from 'react';

export default ({ text, onClick = null, type = 'text' }) => (
  <button onClick={onClick} type={type}>
    {text}
  </button>
);
