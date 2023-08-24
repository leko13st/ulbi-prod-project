import React from "react"
import { useTranslation } from "react-i18next"

const MainPage: React.FC = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div>
                <div>{t("value")}</div>
            </div>
            {t("mainPage")}
        </div>
    )
}

export default MainPage
