import React from 'react'
import { ThemeProvider } from "./ThemeContext.jsx";
import { NavBar, Footer, AboutMe, Technologies, Projects, Formation } from "./Components"

function App() {
    return (
        <div>
            <ThemeProvider>
                <NavBar />
                <main className="main-content">
                    <AboutMe />
                    <Technologies />
                    <Projects />
                    <Formation />
                </main>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default App
