import React from "react";
import style from "./contactme.module.css"
import FormContact from "@/components/FormContact/Form";

const Contactme = () => {
    return (
        <>
            <section className={`${style["contactme-container"]} min-h-screen flex items-center justify-around p-10  text-white`}>
                <div className="flex gap-10">
                    <div className="w-[300px]  flex flex-col gap-10">
                        <h1 className="primary-color font-semibold text-5xl">Contáctame</h1>
                        <p className="primary-color p-5 bg-[#f5f5f5] rounded-md shadow-lg">Si te interesa colaborar en un proyecto o deseas saber más sobre mi trabajo, no dudes en escribirme. Estoy siempre abierto a nuevas oportunidades y desafíos en el desarrollo web.</p>
                    </div>
                    <div>
                        <FormContact />

                    </div>
                </div>
            </section>
        </>
    )

}

export default Contactme