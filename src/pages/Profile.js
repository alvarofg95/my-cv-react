import React from 'react';
import { NOMBRE, LOCATION_ENGLISH, LOCATION_SPANISH } from '../utils/constants';
import Icon from '../components/Icon';

export default ({ language }) => {
  const location = language === 'spanish' ? LOCATION_SPANISH : LOCATION_ENGLISH;
  return (
  <div className="text-center padding-top-50">
    <img src="/img/perfil.png" className="rounded" alt={NOMBRE} />
    <h1 hidden>{NOMBRE}</h1>
    <h3 className='margin-top-20'>{NOMBRE}</h3>
    <h5>Full Stack Javascript</h5>
    <ul className='profile-list'>
      <li>
      <Icon small src='/img/map-pin.svg' />
        <span className="padding-left-5">{location}</span>
      </li>
      <li className='padding-top-20'>
        <Icon src='/img/linkedin.svg' link="https://www.linkedin.com/in/alvarofg95" />
      </li>
    </ul>
  </div>
)};
