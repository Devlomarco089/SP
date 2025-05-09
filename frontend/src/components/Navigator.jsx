import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InteractiveMenu from "./MenuInteractive";

const LoginNavbarCarouselApp = ({ videoSrc, children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#2C3639]">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover z-0"
        src={videoSrc}
      ></video>

      {/* Capa negra */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-60"
        }`}
        style={{ pointerEvents: "none" }}
      ></div>

      {/* Contenido dinámico */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isScrolled ? -300 : 0, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-[#DCD7C9] z-20"
      >
        {children}
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className={`fixed w-full bg-[#2C3639] text-[#DCD7C9] py-4 z-40 shadow-xl transition-all duration-500 ${
          isScrolled ? "top-0" : "-top-20"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <h2 className="text-2xl font-bold text-[#A27B5C]">Spa Sentirse Bien</h2>
          <ul className="flex gap-6 items-center">
            <li>
              <Link
                to="/"
                className="text-xl text-[#DCD7C9] hover:text-[#A27B5C] transition duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/servicios"
                className="text-xl text-[#DCD7C9] hover:text-[#A27B5C] transition duration-300"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="text-xl text-[#DCD7C9] hover:text-[#A27B5C] transition duration-300"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to="/sobrenosotros"
                className="text-xl text-[#DCD7C9] hover:text-[#A27B5C] transition duration-300"
              >
                Sobre Nosotros
              </Link>
            </li>
            {/* Menú interactivo */}
            <li>
              <InteractiveMenu />
            </li>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default React.memo(LoginNavbarCarouselApp);
