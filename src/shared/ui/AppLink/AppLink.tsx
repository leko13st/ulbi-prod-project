import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AppLink.module.scss"
import { Link, LinkProps } from "react-router-dom"
import React, { ReactNode } from "react"
import styles from "./AppLink.module.scss"

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface PropsType extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children: ReactNode
}

export const AppLink: React.FC<PropsType> = ({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {
    return (
        <Link
            to={to}
            className={classNames(cls.applink, {}, [className, styles[theme]])}
            {...otherProps}>
            {children}
        </Link>
    )
}
