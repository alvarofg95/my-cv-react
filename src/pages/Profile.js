import React from 'react';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import { NOMBRE } from '../utils/constants';
import Icon from '../components/Icon';

const Profile = ({ t }) => {
  return (
    <div className="leftPart text-center">
      <img src={require('../assets/img/Alvaro Fernandez García.png')} className="profileImg" alt={NOMBRE} />
      <h1 className="margin-top-20">{NOMBRE}</h1>
      <h2>Full Stack Javascript</h2>
      <ul className="profile-list">
        <li className="location">
          <Icon small src={require('../assets/img/map-pin.svg')} />
          <span className="padding-left-5">{t('profile.location')}</span>
        </li>
        <li className="padding-top-20 socialMedia">
          <Icon
            width={50}
            title={t('profile.linkedIn')}
            src={require('../assets/img/linkedin.svg')}
            link="https://www.linkedin.com/in/alvarofg95"
          />
          <Icon
            width={50}
            title={t('profile.github')}
            src={require('../assets/img/github.png')}
            link="https://github.com/alvarofg95"
          />
        </li>
      </ul>
    </div>
  );
};

export default withTranslation()(Profile);
