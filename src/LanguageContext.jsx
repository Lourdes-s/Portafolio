import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) setLang(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    )
}