import React from "react";
import { Link } from "react-router-dom";
import InteractiveMenu from "./MenuInteractive";

export function Navbar() {
  return (
    <nav className="fixed w-full bg-[#2C3639] text-[#DCD7C9] py-4 z-40 shadow-xl transition-all duration-500">
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
          <li>
            <InteractiveMenu />
          </li>
        </ul>
      </div>
    </nav>
  );
}