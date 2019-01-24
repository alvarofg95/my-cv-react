import React from 'react';
import { NOMBRE, EMAIL } from '../utils/constants';
import Icon from '../components/Icon';

export default () => (
  <div className="text-center" style={{ paddingTop: 50 }}>
    <img src="../static/img/perfil.png" className="rounded" alt={NOMBRE} />
    <h3 style={{ marginTop: 20 }}>{NOMBRE}</h3>
    <h5>Full Stack Javascript</h5>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li>
        <Icon small src='../static/img/mail.svg' />
        <span style={{ paddingLeft: 5 }}>{EMAIL}</span>
      </li>
      <li>
      <Icon small src='../static/img/map-pin.svg' />
        <span style={{ paddingLeft: 5 }}>Madrid, España</span>
      </li>
      <li style={{ paddingTop: 20 }}>
        <Icon src='../static/img/linkedin.svg' link="https://www.linkedin.com/in/alvarofg5" />
      </li>
    </ul>
  </div>
);
