import React from 'react'
import "./Projects.css"
import { PiGithubLogo, PiLink } from "react-icons/pi"

export const Projects = () => {
    return (
        <div className="proyectos">
            <h1>Proyectos</h1>
            <div className="cards-container">
                <div className="project-card">
                    <img src="/assets/Mensajeria.jpg" alt="Proyecto Mensajería" />
                    <div className="project-content">
                        <h3>Proyecto Mensajería</h3>
                        <p>Aplicación web inspirada en WhatsApp Web, con login, registro, chats entre usuarios y edición de perfil. Incluye diseño responsive y scroll infinito en los mensajes.</p>
                        <div className="botones">
                            <a href="https://github.com/Lourdes-s/Proyecto-Final-UTN-Backend" className="btn-codigo" target="_blank" rel="noopener noreferrer"><PiGithubLogo /> Código</a>
                            <a href="https://proyecto-final-utn-frontend.vercel.app/login" className="btn-demo" target="_blank" rel="noopener noreferrer"> <PiLink /> Demo</a>
                        </div>
                    </div>
                </div>
                {/*más cards 🌸*/}
            </div>
        </div>
    )
}