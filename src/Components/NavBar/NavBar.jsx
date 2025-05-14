import React from "react"
import {Link} from "react-scroll"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="navbar">
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
            <a href="/assets/documents/CV-Lourdes-Santillan.pdf" target="_blank" className="cv-button">DESARGA MI CV</a>
        </div>
    )
}