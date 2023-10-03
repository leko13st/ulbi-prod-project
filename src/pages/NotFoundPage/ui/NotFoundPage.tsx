import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

type PropsType = {
    className?: string;
};

export const NotFoundPage: React.FC<PropsType> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
