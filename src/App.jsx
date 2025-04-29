import React from 'react'
import { NavBar, Footer, AboutMe, Technologies, Projects} from "./Components"

function App() {
    return (
        <div>
            <NavBar />
            <main className="main-content">
                <AboutMe />
                <Technologies />
                <Projects />
                <section id="formation" className="">Formación</section>
            </main>
            <Footer />
        </div>
    )
}

export default App
