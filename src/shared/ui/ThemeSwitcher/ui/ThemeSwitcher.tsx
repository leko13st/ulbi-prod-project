import React from 'react';

import { useTheme, Theme } from 'app/providers/ThemeProvider';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import styles from './ThemeSwitcher.module.scss';

type PropsType = {
    className?: string;
};

export const ThemeSwitcher: React.FC<PropsType> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    const getThemeIcon = () => {
        switch (theme) {
            case Theme.LIGHT: {
                return <LightThemeIcon height={'40px'} />;
            }
            case Theme.DARK: {
                return <DarkThemeIcon height={'40px'} />;
            }
            default: {
                return <LightThemeIcon />;
            }
        }
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {getThemeIcon()}
        </Button>
    );
};
