import React from 'react';
import { CURRENT_VERSION } from '../utils/constants';

export default ({ language }) => (
  <div className="card-footer text-muted bg-dark navbar-dark text-center align-footer">
    <p>
      {language === 'spanish'
        ? 'Si quieres tener una web con tu CV solo tienes que contactar conmigo'
        : 'If you want to have a website with your CV only you have to contact me'}
    </p>
    <p>
      {language === 'spanish' ? 'Página web desarrollada con' : 'Web site developed with'} <a href="https://reactjs.org/">ReactJS</a>
      {'. '}
      <span>{CURRENT_VERSION}</span>
    </p>
  </div>
);
