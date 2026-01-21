import React, { useContext } from 'react'
import { useState } from 'react'
import { LanguageContext } from "../../LanguageContext.jsx"
import { texts } from "../../texts.js"
import { GiGraduateCap } from "react-icons/gi"
import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri"
import "./Formation.css"

export const Formation = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const { lang } = useContext(LanguageContext)

    const t = texts[lang].formation
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }


    const formations = [
        {
            title: t.p1,
            institution: t.p2,
            year: "2024",
            img: "/Certificado-UTN.jpg",
            pdf: "/Certificado-UTN.pdf"
        },
        {
            title: t.p4,
            institution: t.p5,
            year: "2025",
            img: "/Certificado-Udemy.jpg",
            pdf: "/Certificado-Udemy.pdf"
        }
    ]
    return (
        <div id='formation' className='formation-container'>
            <h1 className='formation-title'>{t.title}</h1>
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
                                <a href={item.pdf} target='_blank' rel='noopener noreferrer' className='view-pdf'>{t.p3}</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}