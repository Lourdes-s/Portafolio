import React, { useContext } from 'react'
import { LanguageContext } from "../../LanguageContext.jsx"
import { texts } from "../../texts.js"
import { ThemeContext } from "../../ThemeContext.jsx"
import { PiGithubLogo, PiLink } from "react-icons/pi"
import "./Projects.css"


export const Projects = () => {
    const { darkMode } = useContext(ThemeContext)
    const { lang } = useContext(LanguageContext)
    
    const t = texts[lang].projects
    return (
        <div id="projects" className="proyectos">
            <h1>{t.title}</h1>
            <div className="cards-container">
                <div className="project-card">
                    <img src={darkMode ? "/Mensajeria-darkmode.jpg" : "/Mensajeria.jpg"} alt="Proyecto Mensajería" />
                    <div className="project-content">
                        <h3>{t.subtitleMsj}</h3>
                        <p>{t.p1Msj}</p>
                        <div className="project-user-test">
                            <p className="user-test-title">{t.p2Msj}</p>
                            <p><span className="user-test-subtitle">{t.p3Msj}</span> lourdes.tests@gmail.com</p>
                            <p><span className="user-test-subtitle">{t.p4Msj}</span> Mensajeria123</p>
                        </div>
                        <div className="project-technologies">
                            <p>{t.p5Msj}</p>
                            <p className="project-technologies-list">JAVASCRIPT REACT NODE.JS EXPRESS MYSQL</p>
                        </div>
                        <div className="botones">
                            <a href="https://github.com/Lourdes-s/Proyecto-Final-UTN-Frontend" className="btn-codigo" target="_blank" rel="noopener noreferrer"><PiGithubLogo /> Frontend</a>
                            <a href="https://github.com/Lourdes-s/Proyecto-Final-UTN-Backend" className="btn-codigo" target="_blank" rel="noopener noreferrer"><PiGithubLogo /> Backend</a>
                            <a href="https://proyecto-final-utn-frontend.vercel.app" className="btn-demo" target="_blank" rel="noopener noreferrer"> <PiLink /> Demo</a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={darkMode ? "/Creamy-darkmode.jpg" : "/Creamy.jpg"} alt="Proyecto Creamy" />
                    <div className="project-content">
                        <h3>Creamy</h3>
                        <p>{t.p1Crm}</p>
                        <div className="project-user-test">
                            <p className="user-test-title">{t.p2Crm}</p>
                            <p><span className="user-test-subtitle">{t.p3Crm}</span> admin@creamy.com</p>
                            <p><span className="user-test-subtitle">{t.p4Crm}</span> CreamyAdmin</p>
                        </div>
                        <div className="project-technologies">
                            <p>{t.p5Crm}</p>
                            <p className="project-technologies-list">JAVASCRIPT REACT NODE.JS EXPRESS MONGODB</p>
                        </div>
                        <div className="botones">
                            <a href="https://github.com/Lourdes-s/Creamy-Frontend" className="btn-codigo" target="_blank" rel="noopener noreferrer"><PiGithubLogo /> Frontend</a>
                            <a href="https://github.com/Lourdes-s/Creamy-Backend" className="btn-codigo" target="_blank" rel="noopener noreferrer"><PiGithubLogo /> Backend</a>
                            <a href="https://creamy-frontend-8939.vercel.app" className="btn-demo" target="_blank" rel="noopener noreferrer"> <PiLink /> Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}