import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

type PropsType = {
    className?: string;
};

export const Navbar: React.FC<PropsType> = ({ className }) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR}>Text</Button>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                О сайте
            </AppLink>
        </div>
    );
};
