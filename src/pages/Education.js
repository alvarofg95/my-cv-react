import React, { Fragment } from 'react';
import { EDUCATION_SPANISH, EDUCATION_ENGLISH } from '../utils/constants';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import i18next from 'i18next';

const Education = ({ t }) => {
  const translatedEducation =
    i18next.language === 'spanish' ? EDUCATION_SPANISH : EDUCATION_ENGLISH;
  return (
    <Fragment>
      <h3>{t('education.title')}</h3>
      {translatedEducation.map(({ slug, school, location, duration, title }, i) => (
        <div key={`education${i}`} className="divItem">
          <a href={slug} target="blank" className="itemName" title={`${t('goTo')} ${school}`}>
            <b>{school}</b> ({location})
          </a>
          <p className="itemDuration">{duration}</p>
          <p>{title}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default withTranslation()(Education);
