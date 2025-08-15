import React from 'react'
import { useState } from 'react'
import { GiGraduateCap } from "react-icons/gi"
import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri"
import "./Formation.css"

export const Formation = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }


    const formations = [
        {
            title: "Diplomatura en Desarrollo Web Full Stack",
            institution: "Universidad Tecnológica Nacional (UTN)",
            year: "2024",
            img: "/assets/images/Certificado-UTN.jpg",
            pdf: "/assets/documents/Certificado-UTN.pdf"
        },
        {
            title: "Desarrollo Web Desde Cero: HTML5, CSS3 y JavaScript",
            institution: "Udemy",
            year: "2025",
            img: "/assets/images/Certificado-Udemy.jpg",
            pdf: "/assets/documents/Certificado-Udemy.pdf"
        }
    ]
    return (
        <div id='formation' className='formation-container'>
            <h1 className='formation-title'>Formación</h1>
            <div className='certificates-container'>
                {formations.map((item, index) => (
                    <div key={index} className='certificate-card'>
                        <GiGraduateCap className='icon-cap' />
                        <h3>{item.title}</h3>
                        <p>{item.institution}</p>
                        <p className='year'>{item.year}</p>
                        <div className='more-info-btn' onClick={() => handleToggle(index)}>
                            {openIndex === index
                                ? <RiArrowUpWideLine />
                                : <RiArrowDownWideLine />}
                        </div >
                        {openIndex === index && (
                            <div className='certificate-details'>
                                <img src={item.img} alt="Certificado" />
                                <a href={item.pdf} target='_blank' rel='noopener noreferrer' className='view-pdf'> Ver certificado</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}