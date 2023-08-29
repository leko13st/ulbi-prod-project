import React, { ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<PropsType> = ({
    className,
    children,
    theme,
    ...otherProps
}) => {
    return (
        <button
            {...otherProps}
            className={classNames(styles.button, {}, [
                className,
                styles[theme],
            ])}
        >
            {children}
        </button>
    );
};
