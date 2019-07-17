import React from 'react';
import { EDUCATION_SPANISH, EDUCATION_ENGLISH } from '../utils/constants';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import i18next from 'i18next';

const Education = ({ t }) => {
  const translatedEducation =
    i18next.language === 'spanish' ? EDUCATION_SPANISH : EDUCATION_ENGLISH;
  return (
    <div>
      <h3>{t('education.title')}</h3>
      {translatedEducation.map((item, i) => (
        <div key={`education${i}`}>
          <a
            href={item.slug}
            target="blank"
            className="itemName"
            title={`${t('goTo')} ${item.school}`}
          >
            <b>{item.school}</b> ({item.location})
          </a>
          <p className="itemDuration">{item.duration}</p>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default withTranslation()(Education);
