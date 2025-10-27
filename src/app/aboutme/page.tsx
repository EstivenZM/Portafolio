import React from 'react';
import style from "./aboutme.module.css"

const Aboutme = () => {
    return (
        <>

            <section className={`${style["aboutme-container"]} min-h-screen flex flex-col items-center justify-center px-6 py-10 text-center  text-white`}>
                <h1 className="text-4xl font-bold mb-4 primary-color">Sobre mí</h1>
                <p className="max-w-2xl text-lg mb-10 secondary-color">
                    Soy un desarrollador web apasionado por crear experiencias digitales modernas, eficientes y atractivas.
                    Me gusta combinar diseño limpio con código bien estructurado, siempre buscando mejorar mis habilidades
                    y aprender nuevas tecnologías.
                </p>

                <h2 className="text-2xl font-semibold mb-6 primary-color">Tecnologías que uso</h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { name: "TypeScript", color: "#3178C6" },
                        { name: "HTML", color: "#E34F26" },
                        { name: "CSS", color: "#1572B6" },
                        { name: "JavaScript", color: "#F7DF1E", textColor: "#000" },
                        { name: "Next.js", color: "#000000" },
                    ].map((tech) => (
                        <span
                            key={tech.name}
                            className="px-6 py-3 rounded-xl font-medium shadow-md transition-transform transform hover:scale-105"
                            style={{
                                backgroundColor: tech.color,
                                color: tech.textColor || "white",
                            }}
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Aboutme