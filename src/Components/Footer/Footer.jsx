import React, { useRef, useContext } from 'react'
import { LanguageContext } from "../../LanguageContext.jsx"
import { texts } from "../../texts.js"
import { ImLinkedin2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com"
import './Footer.css'

export const Footer = () => {
    const form = useRef();
    const { lang } = useContext(LanguageContext)

    const t = texts[lang].footer

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
            <h2>{t.title}</h2>
            <a href="mailto:lou_santillan98@hotmail.com" className="btn-contact">{t.btn1}</a>
            <div id="footer" className="footer-content">
                <div className="social">
                    <h3>{t.subtitle}</h3>
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
                    <label>{t.form1}</label>
                    <input type="text" name="user_name" required />
                    <label>{t.form2}</label>
                    <input type="email" name="user_email" required />
                    <label>{t.form3}</label>
                    <textarea name="message" required></textarea>
                    <button type="submit">{t.btn2}</button>
                </form>
            </div>
        </div>
    )
}

