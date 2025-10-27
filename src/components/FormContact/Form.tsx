"use client"

import React from "react";
import { useState } from "react";



const FormContact = () => {
    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        number: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Enviando...");

        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbwHt0Rvv5xikbmsiQbP-zibxb0MX-Fnwyvi9QaQumJVMZVD8WncKmgYQR-OPNj9wny2rQ/exec", {
                method: "POST",
                body: JSON.stringify(form),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                setStatus("Mensaje enviado correctamente ✅");
                setForm({ name: "", lastname: "", email: "", number: "", message: "" });
            } else {
                setStatus("Error al enviar el mensaje ❌");
            }
        } catch (error) {
            setStatus("Error de conexión ❌");
        }
    };


    return (
        <>

            <form className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                        <input
                            value={form.lastname}
                            name="lastname"
                            onChange={handleChange}
                            type="text"
                            placeholder="Tu apellido"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                    <input
                        value={form.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                    <input
                        value={form.number}
                        name="number"
                        onChange={handleChange}
                        type="tel"
                        placeholder="+57 300 123 4567"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-gray-700 focus:ring-gray-700 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea
                        value={form.message}
                        name="message"
                        onChange={handleChange}
                        rows={4}
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