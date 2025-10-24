import React from "react";



const FormContact = () => {
    return (
        <>

            <form className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                        <input
                            type="text"
                            placeholder="Tu apellido"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                    <input
                        type="tel"
                        placeholder="+57 300 123 4567"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea
                        rows="4"
                        placeholder="Escribe tu mensaje..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring- focus:border-gray-700 focus:ring-gray-700 focus:outline-none resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#424242] text-white py-2 rounded-lg font-medium hover:bg-white hover:text-[#424242] hover:border hover:border-gray-700 transition"
                >
                    Enviar mensaje
                </button>
            </form>

        </>
    )
}

export default FormContact