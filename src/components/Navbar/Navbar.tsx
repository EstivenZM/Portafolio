"use client"
import React from "react"
import style from "./Navbar.module.css"

//Library to effect on h1
import Typewriter from "typewriter-effect"
import Link from "next/link"


const Navbar = () => {

    return (
        <>
            <nav className={` bg-[#FFFAFA] flex p-4 items-center justify-center flex-wrap`}>
                <div className="container-links flex gap-10 items-center">
                    <div className="aboutme-link link">
                        <Link href="/dashboard" className="secondary-color ">Sobre mi</Link>
                        <span className="line"></span>
                    </div>
                    <div>
                        <h1 className={`${style["link-center"]} primary-color`}>Portafolio</h1>
                    </div>
                    <div className="projects-link link">
                        <Link href="/projects" className="secondary-color">Proyectos</Link>
                        <span className="line"></span>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar

