import React from 'react';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import { NOMBRE } from '../utils/constants';
import Icon from '../components/Icon';

const Profile = ({ t }) => {
  return (
    <div className="leftPart text-center">
      <img src={require('../assets/img/alvarofg95.png')} className="profileImg" alt={NOMBRE} />
      <h3 className="margin-top-20">{NOMBRE}</h3>
      <h4>Full Stack Javascript</h4>
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
