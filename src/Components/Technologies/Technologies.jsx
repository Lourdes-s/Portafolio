import React from 'react'
import './Technologies.css' 
import { VscCode } from "react-icons/vsc"
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";


export const Technologies = () => {
    return (
        <section className="technologies"> 
            <h1 className="technologies-title">Tecnologías</h1>
            <div className="technologies-container">
                <div className="technologies-category">
                <VscCode className="technologies-icon technologies-icon-frontend" />
                    <h2 className="technologies-subtitle">Frontend</h2> 
                    <div className="technologies-list">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span> 
                        <span>React</span>  
                    </div>
                </div>
                <div className="technologies-category"> 
                    <AiOutlineDatabase className="technologies-icon"/>
                    <h2 className="technologies-subtitle">Backend</h2>  
                    <div className="technologies-list">
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>MySQL</span>
                    </div>
                </div>
                <div className="technologies-category">
                    <AiOutlineSetting className="technologies-icon" />
                    <h2 className="technologies-subtitle">Herramientas</h2>
                    <div className="technologies-list">
                        <span>GitHub</span>
                        <span>Postman</span>
                    </div>
                </div>
            </div>
        </section>
    )
}