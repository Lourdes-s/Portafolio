import React from 'react'
import { ImLinkedin2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <h2>¡Gracias por visitar!</h2>
            <a href="#contacto" className="btn-contact">Contactame</a>
            <div id="footer" className="footer-content">

                {/* Redes sociales */}
                <div className="social">
                    <h3>También podés contactarme por</h3>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/lourdes-santillan" target="_blank">
                            <span className="icon"><ImLinkedin2 /></span>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.github.com/Lourdes-s" target="_blank">
                            <span className="icon"><FaGithub /></span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Formulario */}
                <div className="contact-form">
                    <label>Nombre</label>
                    <input type="text" name="nombre" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Mensaje</label>
                    <textarea name="mensaje"></textarea>
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </div>
    )
}

