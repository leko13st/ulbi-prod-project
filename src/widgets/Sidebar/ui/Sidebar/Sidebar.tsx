import React, { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Sidebar.module.scss"
import { Button } from "shared/ui/Button/Button"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher"

type PropsType = {
    className?: string
}

export const Sidebar: React.FC<PropsType> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(
                styles.sidebar,
                { [styles.collapsed]: collapsed },
                [className]
            )}>
            <Button onClick={onToggle}>Toggle</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
