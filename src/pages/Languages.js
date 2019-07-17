import React from 'react';
import { LANGUAGES_SPANISH, LANGUAGES_ENGLISH } from '../utils/constants';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import i18next from 'i18next';

const Languages = ({ t }) => {
  const translatedLanguages =
    i18next.language === 'spanish' ? LANGUAGES_SPANISH : LANGUAGES_ENGLISH;
  return (
    <div>
      <h3>{t('languages.title')}</h3>
      {translatedLanguages.map((item, i) => (
        <div key={`language${i}`}>
          <span>{item.language}: </span>
          <a
            href={item.slug}
            target="blank"
            className="itemName"
            title={`${t('goTo')} ${item.certificate}`}
          >
            <b>{item.certificate}</b>
          </a>
        </div>
      ))}
    </div>
  );
};

export default withTranslation()(Languages);
