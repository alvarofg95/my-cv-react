import React from 'react';
import { CURRENT_VERSION } from '../utils/constants';

export default ({ language }) => (
  <div className="text-muted align-footer">
    <span>{CURRENT_VERSION}</span>
  </div>
);
