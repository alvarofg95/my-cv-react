import React from 'react';
import { NOMBRE } from '../utils/constants';
import Icon from '../components/Icon';
import { withTranslation } from 'react-i18next';

const Profile = ({ t }) => {
  return (
    <div className="leftPart text-center">
      <img
        src={require('../static/img/alvarofg95.png')}
        className="profileImg"
        alt={NOMBRE}
      />
      <h1 hidden>{NOMBRE}</h1>
      <h3 className="margin-top-20">{NOMBRE}</h3>
      <h4>Full Stack Javascript</h4>
      <ul className="profile-list">
        <li className="location">
          <Icon small src={require('../static/img/map-pin.svg')} />
          <span className="padding-left-5">{t('profile.location')}</span>
        </li>
        <li className="padding-top-20">
          <Icon
            title={t('profile.linkedIn')}
            src={require('../static/img/linkedin.svg')}
            link="https://www.linkedin.com/in/alvarofg95"
          />
        </li>
      </ul>
    </div>
  );
};

export default withTranslation()(Profile);
