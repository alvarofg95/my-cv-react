import React from 'react';
import { NOMBRE, EMAIL } from '../utils/constants';
import Icon from '../components/Icon';

export default () => (
  <div className="text-center padding-top-50">
    <img src="/img/perfil.png" className="rounded" alt={NOMBRE} />
    <h3 className='margin-top-20'>{NOMBRE}</h3>
    <h5>Full Stack Javascript</h5>
    <ul className='profile-list'>
      <li>
        <Icon small src='/img/mail.svg' />
        <span className="padding-left-5">{EMAIL}</span>
      </li>
      <li>
      <Icon small src='/img/map-pin.svg' />
        <span className="padding-left-5">Madrid, España</span>
      </li>
      <li className='padding-top-20'>
        <Icon src='/img/linkedin.svg' link="https://www.linkedin.com/in/alvarofg5" />
      </li>
    </ul>
  </div>
);
