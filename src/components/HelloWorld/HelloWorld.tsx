import React from 'react';
import { useTranslation } from 'react-i18next';
import { IHelloWorld } from './HelloWorld.interface';
import styles from './HelloWorld.module.scss';


const HelloWorld: React.FC<IHelloWorld> = ({ text }) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const { language } = i18n;
    const toggledLanguage = language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(toggledLanguage);
  };

  return (
    <button type="button" onClick={toggleLanguage} className={styles.title}>
      {t('Hello world')}
      ,
      {' '}
      {text}
    </button>
  );
};

export default HelloWorld;
