import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark") {
            setDarkMode(true)
            document.body.classList.add("dark-mode")
        } else {
            setDarkMode(false);
            document.body.classList.remove("dark-mode")
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("theme", "dark")
            document.body.classList.add("dark-mode")
        } else {
            localStorage.setItem("theme", "light")
            document.body.classList.remove("dark-mode")
        }
    }, [darkMode])

    const toggleTheme = () => setDarkMode((prev) => !prev)

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}