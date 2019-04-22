import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-expand-lg bg-dark">
    <Link to="/">Inicio</Link>
    <Link to="/contacto">Contacto</Link>
  </nav>
);
