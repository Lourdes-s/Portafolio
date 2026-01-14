import React from 'react'
import { ThemeProvider } from "./ThemeContext.jsx";
import { LanguageProvider } from './LanguageContext.jsx';
import { NavBar, Footer, AboutMe, Technologies, Projects, Formation } from "./Components"

function App() {
    return (
        <div>
            <ThemeProvider>
                <LanguageProvider>
                <NavBar />
                <main className="main-content">
                    <AboutMe />
                    <Technologies />
                    <Projects />
                    <Formation />
                </main>
                <Footer />
                </LanguageProvider>
            </ThemeProvider>
        </div>
    )
}

export default App
