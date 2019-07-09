import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <Link to="/">Inicio</Link>
    <Link to="/proyectos">Proyectos</Link>
    <Link to="/contacto">Contacto</Link>
  </header>
);
