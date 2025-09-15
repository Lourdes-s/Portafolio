import React, { useContext } from 'react'
import { ThemeContext } from "../../ThemeContext.jsx"
import { PiGithubLogo, PiLink } from "react-icons/pi"
import "./Projects.css"


export const Projects = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div id="projects" className="proyectos">
            <h1>Proyectos</h1>
            <div className="cards-container">
                <div className="project-card">
                    <img src={darkMode ? "/Mensajeria-darkmode.jpg" : "/Mensajeria.jpg"} alt="Proyecto Mensajería" />
                    <div className="project-content">
                        <h3>Proyecto Mensajería</h3>
                        <p>Aplicación web inspirada en WhatsApp Web, con login, registro, autenticación de email, chats entre usuarios y edición de perfil. Incluye diseño responsive y scroll infinito en los mensajes.</p>
                        <div className="project-user-test">
                            <p className="user-test-title">Usuario de prueba</p>
                            <p><span className="user-test-subtitle">Correo:</span> lourdes.tests@gmail.com</p>
                            <p><span className="user-test-subtitle">Contraseña:</span> Mensajeria123</p>
                        </div>
                        <div className="project-technologies">
                            <p>Tecnologías utilizadas:</p>
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
                        <p>e-commerce que permite explorar un catálogo de productos, visualizar detalles, filtrar por categorías y gestionar un CRUD del carrito. CRUD de productos accesible solo por administradores. </p>
                        <div className="project-user-test">
                            <p className="user-test-title">Usuario de prueba - Admin</p>
                            <p><span className="user-test-subtitle">Correo:</span> admin@creamy.com</p>
                            <p><span className="user-test-subtitle">Contraseña:</span> CreamyAdmin</p>
                        </div>
                        <div className="project-technologies">
                            <p>Tecnologías utilizadas:</p>
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