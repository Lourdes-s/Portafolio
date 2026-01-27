import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext.jsx";
import { LanguageContext } from "../../LanguageContext.jsx"
import { texts } from "../../texts.js"
import { Link } from "react-scroll";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./NavBar.css";

export const NavBar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext)
    const { lang } = useContext(LanguageContext)
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(v => !v)
    const closeMenu = () => setOpen(false)

const t = texts[lang].navBar
    const linkProps = { smooth: true, duration: 500, className: "nav-link", onClick: closeMenu }

    return (
        <>
            <button
                className="mobile-trigger"
                onClick={toggleMenu}
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
                {open ? <IoClose size={22} /> : <GiHamburgerMenu size={22} />}
            </button>

            <div className={`overlay ${open ? "show" : ""}`} onClick={closeMenu} />

            <nav className={`navbar ${open ? "open" : ""}`}>
                <div className="switch">
                    <button onClick={toggleTheme} aria-label="Cambiar tema">
                        {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                    </button>
                </div>

                <ul className="list">
                    <li className="list-item"><Link to="aboutMe" {...linkProps}>{t.p1}</Link></li><li className="list-item"><Link to="skills" {...linkProps}>{t.p2}</Link></li>
                    <li className="list-item"><Link to="technologies" {...linkProps}>{t.p2}</Link></li>
                    <li className="list-item"><Link to="projects" {...linkProps}>{t.p3}</Link></li>
                    <li className="list-item"><Link to="formation" {...linkProps}>{t.p4}</Link></li>
                </ul>

                <a href="/CV-Lourdes-Santillan.pdf" target="_blank" className="cv-button">
                    {t.p5}
                </a>
            </nav>
        </>
    )
}