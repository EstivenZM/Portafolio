"use client"
import Card from "@/components/Card/Card";
import FormContact from "@/components/FormContact/Form";
import { projects } from "@/constants/projects";


export default function Home() {

    return (
        <>
            <section className="iam-container p-10">
                <div className="flex min-h-[70vh] gap-10 justify-center flex-wrap-reverse">
                    <div className="iam-container_description  w-[400px] flex items-center">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center p-2">
                                <h2 className="primary-color font-semibold text-5xl">Hola, soy</h2>
                            </div>
                            <div className="flex items-center p-2">
                                <h3 className="secondary-color text-3xl">Estiven Zapata Muñoz</h3>
                            </div>
                            <div className="flex items-center p-2">
                                <h2 className="primary-color font-semibold text-5xl">Desarrollador web</h2>
                            </div>
                        </div>
                    </div>
                    <div className="iam-container_image w-[400px] flex justify-center">
                        {/* <img src="" alt="" className="h-full object-container w-full" /> */}
                    </div>
                </div>
            </section>
            <hr className="secondary-color" />
            <section className="flex flex-col gap-5 justify-center items-center mt-10 mb-10 text-center">
                <h2 className="text-4xl font-semibold primary-color mb-4">Yo...</h2>
                <p className="text-lg text-gray-600 leading-relaxed w-[300px]">
                    Soy un <span className="font-semibold primary-color">desarrollador web</span> que disfruta crear sitios y aplicaciones que se vean bien y funcionen mejor.
                    Aprendo rápido y busco mejorar la vida de las personas mediante la <span className="primary-color font-medium">programación</span>.
                </p>
            </section>
            <hr className="secondary-color" />
            <section className="bestprojects-container flex justify-center items-center gap-10 flex-col mt-10 mb-10">
                <h1 className="bestprojects-container__title primary-color text-4xl font-semibold">
                    Proyectos
                </h1>
                <div className="flex gap-10 justify-center">
                    {projects.map((project) => (
                        <div key={project.title}>
                            <Card image={project.image} title={project.title} description={project.description} url={project.url} />
                        </div>
                    ))}
                </div>
            </section>
            <hr className="secondary-color" />
            <section className="flex justify-center mt-10 flex-col items-center mb-10">
                <h1 className="primary-color text-4xl font-semibold">Contáctame</h1>
                <div className="mt-10">
                    <FormContact />
                </div>
            </section>
        </>

    );
}
