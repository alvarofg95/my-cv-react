import React from 'react';
import { NOMBRE, LOCATION_SPANISH } from '../utils/constants';
import Icon from '../components/Icon';

export default ({ language }) => {
  return (
    <div className="leftPart text-center">
      <img
        src={require('../static/img/Álvaro Fernández García.png')}
        className="profileImg"
        alt={NOMBRE}
      />
      <h1 hidden>{NOMBRE}</h1>
      <h3 className="margin-top-20">{NOMBRE}</h3>
      <h5>Full Stack Javascript</h5>
      <ul className="profile-list">
        <li className="location">
          <Icon small src={require('../static/img/map-pin.svg')} />
          <span className="padding-left-5">{LOCATION_SPANISH}</span>
        </li>
        <li className="padding-top-20">
          <Icon
            src={require('../static/img/linkedin.svg')}
            link="https://www.linkedin.com/in/alvarofg95"
          />
        </li>
      </ul>
    </div>
  );
};
