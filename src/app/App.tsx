import React, { Suspense } from "react"
import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"

export const App: React.FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <div className="content-wrapper">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    )
}
