import React from 'react';
import './AboutMe.css';
import { ImLinkedin2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

export const AboutMe = () => {
    const email = "lou_santillan98@hotmail.com";
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email)
    }

    return (
        <section id="aboutMe" className="about-me">
            <h1 className="about-title">Lourdes Santillán</h1>
            <h2 className="about-subtitle">Bienvenido a mi portafolio como desarrolladora web.</h2>
            <div className="about-content"> 
                <div className="about-text">
                    <p>
                        Soy profesora de artes visuales con una sólida base en creatividad y expresión artística, pero mi verdadera pasión siempre ha estado vinculada al mundo digital.
                    </p>
                    <p>
                        Desde hace años, he explorado el dibujo digital y la edición de imágenes, combinando mi amor por el arte con las herramientas tecnológicas. Durante la pandemia, se despertó en mí el interés por el desarrollo web.
                    </p>
                    <p>
                        Esta curiosidad me llevó a cursar una diplomatura en desarrollo Full Stack en la UTN. Aunque disfruto de los aspectos visuales y creativos del desarrollo, mi curiosidad y habilidades técnicas me han llevado a enfocarme en el backend.
                    </p>
                </div>
                <div className="about-image">
                    <img src="/assets/images/TestPic.png" alt="Ilustración de Lourdes Santillán"/>
                </div>
            </div>
            <p>
                Si quieres ponerte en contacto conmigo, escríbeme a 
                <span className="email-highlight">{email}</span>
                <button onClick={copyEmailToClipboard} className="copy-button">
                    <MdOutlineContentCopy />
                </button>
            </p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/lourdes-santillán-613640152/" target="_blank" rel="noopener noreferrer">
                    <ImLinkedin2 />
                </a>
                <a href="https://github.com/Lourdes-s" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </section>
    )
}