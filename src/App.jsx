import React from 'react'
import { NavBar, Footer, AboutMe, Technologies, Projects, Formation } from "./Components"

function App() {
    return (
        <div>
            <NavBar />
            <main className="main-content">
                <AboutMe />
                <Technologies />
                <Projects />
                <Formation />
            </main>
            <Footer />
        </div>
    )
}

export default App
