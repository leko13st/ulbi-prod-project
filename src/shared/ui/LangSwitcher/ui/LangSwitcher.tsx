import React from "react"
import { Button } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"

export const LangSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation()

    const onToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return <Button onClick={onToggleLanguage}>{t("Язык")}</Button>
}
