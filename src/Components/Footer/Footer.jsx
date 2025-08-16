import React from 'react'
import { ImLinkedin2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
    return (
        <div class="footer">
            <h2>¡Gracias por visitar!</h2>
            <a href="#contacto" class="btn-contact">Contactame</a>
            <div id="footer" class="footer-content">
                <div class="social">
                    <h3>También podés contactarme por</h3>
                    <a href="https://www.linkedin.com/in/lourdes-santillan" target="_blank">
                        <ImLinkedin2 /> LinkedIn
                    </a>
                    <a href="https://www.github.com/Lourdes-s" target="_blank">
                        <FaGithub /> GitHub
                    </a>
                </div>
                <div class="contact-form">
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

