import React, { Suspense, useContext, useState } from "react"
import "./styles/index.scss"
import { Route, Routes, Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { ThemeContext } from "./theme/ThemeContext"
import useTheme from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

export const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Тема</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync />} />
                    <Route path="/about" element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
