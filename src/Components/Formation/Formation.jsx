import React from 'react'
import { useState } from 'react'
import { GiGraduateCap } from "react-icons/gi"
import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri"
import "./Formation.css"

export const Formation = () => {
    const [showCertificate, setShowCertificate] = useState(false)
    const handleToggle = () => {
        setShowCertificate(!showCertificate)
    }
    return (
        <div className='formation-container'>
            <h1 className='formation-title'>Formación</h1>
            <div className='certificates-container'>
                <div>
                    <GiGraduateCap className='icon-graduate' />
                    <h3>Diplomatura en Desarrollo Web Full Stack</h3>
                    <p>Universidad Tecnológica Nacional (UTN)</p>
                    <p>2024</p>
                    <div className='More-info' onClick={handleToggle}>
                        {showCertificate ? <RiArrowUpWideLine /> : <RiArrowDownWideLine />}
                    </div>
                    {showCertificate && (
                        <div className='certificate-image'>
                            <a href="/assets/documents/Certificado-UTN.pdf" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/Certificado-UTN.jpg" alt="Diploma"/>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}