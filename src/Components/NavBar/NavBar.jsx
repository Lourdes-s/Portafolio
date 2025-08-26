import React, { useContext } from "react"
import { ThemeContext } from "../../ThemeContext.jsx"
import { Link } from "react-scroll"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md"
import "./NavBar.css"

export const NavBar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="navbar">
            <div className="switch">
                <button onClick={toggleTheme} aria-label="Cambiar tema">
                    {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </button>
            </div>
            <ul className="list">
                <li className="list-item">
                    <Link to="aboutMe" smooth={true} duration={500} className="nav-link">Sobre mí</Link>
                </li>
                <li className="list-item">
                    <Link to="technologies" smooth={true} duration={500} className="nav-link">Tecnologías</Link>
                </li>
                <li className="list-item">
                    <Link to="projects" smooth={true} duration={500} className="nav-link">Proyectos</Link>
                </li>
                <li className="list-item">
                    <Link to="formation" smooth={true} duration={500} className="nav-link">Formación</Link>
                </li>
            </ul>
            <a href="/CV-Lourdes-Santillan.pdf" target="_blank" className="cv-button">DESARGA MI CV</a>
        </div>
    )
}