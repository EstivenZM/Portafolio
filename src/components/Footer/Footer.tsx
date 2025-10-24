import React from "react";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col items-center justify-center gap-3 py-6  bg-[#FFFAFA]  text-gray-400 shadow-lg">
                <p>© 2025 Estiven Zapata Muñoz — Todos los derechos reservados</p>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/tuusuario"
                        target="_blank"
                        className="px-4 py-2 bg-[#424242] text-white rounded-lg hover:bg-[#BDBDBD] hover:text-[#424242] transition"
                    >
                        <Github />
                        
                    </a>
                    <a
                        href="https://linkedin.com/in/tuusuario"
                        target="_blank"
                        className="px-4 py-2 bg-[#424242] text-white rounded-lg hover:bg-[#BDBDBD] hover:text-[#424242] transition"
                    >
                        <Linkedin/>
                    </a>
                </div>
            </footer>

        </>
    )
}

export default Footer