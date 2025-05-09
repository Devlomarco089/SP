import React, { useState } from "react";
import LoginNavbarCarouselApp from "../components/Navigator";
import { motion } from "framer-motion";

export function About() {
    const [activeTab, setActiveTab] = useState("historia");

    return (
        <>
            <LoginNavbarCarouselApp videoSrc="/assets/about.mp4">
                <motion.h1
                    className="text-6xl font-bold mb-6 tracking-wide text-[#DCD7C9]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Nuestros Servicios
                </motion.h1>
                <p className="text-lg text-[#DCD7C9] mt-4">
                    Descubre nuestras opciones para relajarte y sentirte bien.
                </p>
            </LoginNavbarCarouselApp>

            {/* Contenedor principal con fondo oscuro */}
            <div className="min-h-screen py-16 px-8 bg-[#2C3639]">
                <h1 className="text-4xl font-bold text-center mb-12 text-[#DCD7C9]">
                    Sobre Nosotros
                </h1>

                {/* Navegación de pestañas */}
                <div className="tabs flex justify-center space-x-8 border-b border-[#4A5759] mb-12">
                    <button
                        className={`text-lg font-medium pb-2 transition-colors duration-300 ${
                            activeTab === "historia"
                                ? "text-[#A27B5C] border-b-2 border-[#A27B5C]"
                                : "text-[#DCD7C9] hover:text-[#A27B5C]"
                        }`}
                        onClick={() => setActiveTab("historia")}
                    >
                        Nuestra Historia
                    </button>
                    <button
                        className={`text-lg font-medium pb-2 transition-colors duration-300 ${
                            activeTab === "mision"
                                ? "text-[#A27B5C] border-b-2 border-[#A27B5C]"
                                : "text-[#DCD7C9] hover:text-[#A27B5C]"
                        }`}
                        onClick={() => setActiveTab("mision")}
                    >
                        Misión y Visión
                    </button>
                    <button
                        className={`text-lg font-medium pb-2 transition-colors duration-300 ${
                            activeTab === "elegirnos"
                                ? "text-[#A27B5C] border-b-2 border-[#A27B5C]"
                                : "text-[#DCD7C9] hover:text-[#A27B5C]"
                        }`}
                        onClick={() => setActiveTab("elegirnos")}
                    >
                        Por Qué Elegirnos
                    </button>
                </div>

                {/* Contenido de las pestañas */}
                <div className="tab-content max-w-4xl mx-auto bg-[#3F4E4F] rounded-lg shadow-xl p-8">
                    {activeTab === "historia" && (
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-[#A27B5C]">
                                Nuestra Historia
                            </h2>
                            <p className="text-lg leading-relaxed text-[#DCD7C9]">
                                Fundado en 2010 por la Doctora Felicidad, Sentirse Bien Spa nació con la misión de ofrecer un
                                enfoque integral del bienestar en un ambiente de lujo accesible. Desde entonces, nos hemos
                                convertido en el referente de tratamientos corporales y faciales en la región, combinando
                                técnicas tradicionales con las últimas innovaciones en estética y bienestar.
                            </p>
                        </section>
                    )}

                    {activeTab === "mision" && (
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-[#A27B5C]">
                                Misión y Visión
                            </h2>
                            <p className="text-lg leading-relaxed text-[#DCD7C9]">
                                Nuestra misión es mejorar la calidad de vida de nuestros clientes a través de servicios de
                                bienestar excepcionales. Nos esforzamos por ofrecer tratamientos personalizados que promuevan
                                la relajación, la salud y el equilibrio. Nuestra visión es ser reconocidos como el spa líder
                                en innovación, calidad y atención al cliente, creando experiencias inolvidables para todos
                                nuestros visitantes.
                            </p>
                        </section>
                    )}

                    {activeTab === "elegirnos" && (
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-[#A27B5C]">
                                ¿Por Qué Elegirnos?
                            </h2>
                            <ul className="space-y-4 text-lg leading-relaxed text-[#DCD7C9]">
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#A27B5C]">•</span>
                                    <div>
                                        <strong className="text-[#A27B5C]">Experiencia y profesionalismo:</strong> 
                                        Contamos con un equipo altamente capacitado y comprometido con tu bienestar.
                                    </div>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#A27B5C]">•</span>
                                    <div>
                                        <strong className="text-[#A27B5C]">Ambiente relajante:</strong> 
                                        Nuestras instalaciones están diseñadas para ofrecerte una experiencia de tranquilidad y confort.
                                    </div>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#A27B5C]">•</span>
                                    <div>
                                        <strong className="text-[#A27B5C]">Productos de calidad:</strong> 
                                        Utilizamos productos naturales y de alta calidad para garantizar los mejores resultados.
                                    </div>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#A27B5C]">•</span>
                                    <div>
                                        <strong className="text-[#A27B5C]">Enfoque personalizado:</strong> 
                                        Adaptamos nuestros servicios a tus necesidades específicas para que cada visita sea única.
                                    </div>
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
}