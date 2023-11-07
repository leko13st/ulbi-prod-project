import React, { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import styles from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';

type PropsType = {
    className?: string;
};

export const Sidebar: React.FC<PropsType> = ({ className }) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <Button data-testid="sidebar-toggle-button" onClick={onToggle}>
                {t('тогл')}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
