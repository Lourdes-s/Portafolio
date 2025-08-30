import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext.jsx";
import { Link } from "react-scroll";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./NavBar.css";

export const NavBar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(v => !v);
    const closeMenu = () => setOpen(false);


    const linkProps = { smooth: true, duration: 500, className: "nav-link", onClick: closeMenu };

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
                    <li className="list-item"><Link to="aboutMe" {...linkProps}>Sobre mí</Link></li>
                    <li className="list-item"><Link to="technologies" {...linkProps}>Tecnologías</Link></li>
                    <li className="list-item"><Link to="projects" {...linkProps}>Proyectos</Link></li>
                    <li className="list-item"><Link to="formation" {...linkProps}>Formación</Link></li>
                </ul>

                <a href="/CV-Lourdes-Santillan.pdf" target="_blank" className="cv-button">
                    DESARGA MI CV
                </a>
            </nav>
        </>
    );
};