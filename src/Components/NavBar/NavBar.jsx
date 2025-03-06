import React from "react"
import {Link} from "react-scroll"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="list">
                <li className="list-item">
                    <Link to="about" smooth={true} duration={500} className="nav-link">Sobre mí</Link>
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
                <li className="list-item">
                    <Link to="contact" smooth={true} duration={500} className="nav-link">Contacto</Link>
                </li>
            </ul>
            <button className="cv-button">DESCARGA MI CV</button>
        </div>
    )
}