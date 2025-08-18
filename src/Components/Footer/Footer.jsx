import React, { useRef } from 'react'
import { ImLinkedin2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com"
import './Footer.css'

export const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_tx66cjc",
            "template_r2q7pf8",
            form.current,
            "Ks9IFhGS3G7Kvwpj2"
        )
            .then((result) => {
                console.log(result.text);
                alert("✅ Mensaje enviado con éxito!")
                form.current.reset()
            }, (error) => {
                console.log(error.text)
                alert("❌ Error al enviar el mensaje, intentá nuevamente.")
            })
    }

    return (
        <div className="footer">
            <h2>¡Gracias por visitar!</h2>
            <a href="mailto:lou_santillan98@hotmail.com" className="btn-contact">Contactame</a>
            <div id="footer" className="footer-content">
                <div className="social">
                    <h3>También podés contactarme por</h3>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/lourdes-santillan" target="_blank" rel="noopener noreferrer">
                            <span className="icon"><ImLinkedin2 /></span>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.github.com/Lourdes-s" target="_blank" rel="noopener noreferrer">
                            <span className="icon"><FaGithub /></span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <label>Nombre</label>
                    <input type="text" name="user_name" required />
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                    <label>Mensaje</label>
                    <textarea name="message" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

