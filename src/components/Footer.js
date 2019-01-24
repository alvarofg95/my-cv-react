import React from 'react';
import { CURRENT_VERSION } from '../utils/constants';

export default () => (
  <div className="card-footer text-muted bg-dark navbar-dark text-center">
    <p>Si quieres tener una web con tu CV solo tienes que contactar conmigo</p>
    <p>
      Página web desarrollada con <a href="https://reactjs.org/">ReactJS</a>{'. '}
      <span>{CURRENT_VERSION}</span>
    </p>
  </div>
);
