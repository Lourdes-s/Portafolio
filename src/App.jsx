import React from 'react'
import { NavBar, Footer, AboutMe } from "./Components"

function App() {
    return (
        <div>
            <NavBar />
            <main className="main-content">
                <AboutMe />
                <section id="technologies" className="">Tecnologías</section>
                <section id="projects" className="">Proyectos</section>
                <section id="formation" className="">Formación</section>
                <section id="contact" className="">Contacto</section>
            </main>
            <Footer />
        </div>
    )
}

export default App
