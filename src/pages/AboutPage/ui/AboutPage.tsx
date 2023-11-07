import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    return <div>{t('о странице')}</div>;
};

export default AboutPage;
