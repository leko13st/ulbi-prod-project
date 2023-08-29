import React from 'react';

import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div>
                <div>{t('значение')}</div>
            </div>
            {t('главная страница')}
            {t('добро пожаловать')}
        </div>
    );
};

export default MainPage;
