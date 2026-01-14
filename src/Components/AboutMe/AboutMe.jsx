import React, { useContext } from 'react'
import { LanguageContext } from "../../LanguageContext.jsx"
import { texts } from "../../texts.js"
import { ThemeContext } from "../../ThemeContext.jsx"
import { ImLinkedin2 } from "react-icons/im"
import { FaGithub } from "react-icons/fa"
import { MdOutlineContentCopy } from "react-icons/md"
import './AboutMe.css'

export const AboutMe = () => {
    const { darkMode } = useContext(ThemeContext)
    const { lang } = useContext(LanguageContext)

    const t = texts[lang].about

    const email = "lou_santillan98@hotmail.com"
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email)
    }

    return (
        <section id="aboutMe" className="about-me">
            <h1 className="about-title">Lourdes Santillán</h1>
            <h2 className="about-subtitle">{t.subtitle}</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>{t.p1}</p>
                    <p>{t.p2}</p>
                    <p>{t.p3}</p>
                </div>
                <div className="about-image">
                    <img src={darkMode ? "/MePic-darkmode.png" : "/MePic.png"} alt="Ilustración de Lourdes Santillán" />
                </div>
            </div>
            <p>
                {t.contact}
                <span className="email-highlight">{email}</span>
                <button onClick={copyEmailToClipboard} className="copy-button">
                    <MdOutlineContentCopy />
                </button>
            </p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/lourdes-santillan" target="_blank" rel="noopener noreferrer">
                    <ImLinkedin2 />
                </a>
                <a href="https://github.com/Lourdes-s" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </section>
    )
}