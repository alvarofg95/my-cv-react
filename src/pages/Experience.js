import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import i18next from 'i18next';
import { EXPERIENCE_SPANISH, EXPERIENCE_ENGLISH } from '../utils/constants';
import ExperienceItem from '../components/ExperienceItem';

const Experience = ({ t }) => {
  const translatedExperience =
    i18next.language === 'spanish' ? EXPERIENCE_SPANISH : EXPERIENCE_ENGLISH;
  return (
    <Fragment>
      <h3>{t('experience.title')}</h3>
      {translatedExperience.map((item, i) => (
        <ExperienceItem key={`experience-${i}`} item={item} />
      ))}
    </Fragment>
  );
};

export default withTranslation()(Experience);
