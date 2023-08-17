import React, { Suspense } from "react"
import "./styles/index.scss"
import { Route, Routes, Link } from "react-router-dom"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"

export const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Тема</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
