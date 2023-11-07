import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

type PropsType = {
    className?: string;
};

export const Navbar: React.FC<PropsType> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            {/* <Button theme={ThemeButton.CLEAR}>Text</Button> */}
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                {t('главная')}
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                {t('о сайте')}
            </AppLink>
        </div>
    );
};
