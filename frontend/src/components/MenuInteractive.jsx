import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const InteractiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar si el usuario está autenticado

  // Verificar si el usuario está autenticado al cargar el componente
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("accessToken"); // Verifica si el token existe
      setIsAuthenticated(!!token); // Si hay un token, el usuario está autenticado
    };

    checkAuth();
  }, []);

  // Manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // Elimina el token del localStorage
    setIsAuthenticated(false); // Actualiza el estado
    setIsOpen(false); // Cierra el menú
  };

  return (
    <div className="relative">
      {/* Botón del menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-[#A27B5C] text-[#DCD7C9] shadow-lg focus:outline-none hover:bg-[#4A5759] transition duration-300"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú deslizante */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 right-0 w-72 max-h-screen bg-[#3F4E4F] text-[#DCD7C9] shadow-lg p-8 z-40 overflow-y-auto rounded-l-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Botón para cerrar el menú */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#DCD7C9] hover:text-[#A27B5C] transition duration-300"
        >
          <X size={28} />
        </button>

        {/* Sección de cuenta */}
        <h2 className="text-xl font-bold border-b pb-4 mb-4">Cuenta</h2>
        <ul className="space-y-4">
          {isAuthenticated ? (
            <>
              <li
                className="hover:text-[#A27B5C] transition duration-300 cursor-pointer"
                onClick={() => {
                  setIsOpen(false); // Cierra el menú
                  window.location.href = "/panel"; // Redirige al panel del usuario
                }}
              >
                Mi Panel
              </li>
              <li
                className="hover:text-[#A27B5C] transition duration-300 cursor-pointer"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </li>
            </>
          ) : (
            <>
              <li
                className="hover:text-[#A27B5C] transition duration-300 cursor-pointer"
                onClick={() => {
                  setIsOpen(false); // Cierra el menú
                  window.location.href = "/login"; // Redirige a la página de inicio de sesión
                }}
              >
                Inicio de sesión
              </li>
              <li
                className="hover:text-[#A27B5C] transition duration-300 cursor-pointer"
                onClick={() => {
                  setIsOpen(false); // Cierra el menú
                  window.location.href = "/register"; // Redirige a la página de registro
                }}
              >
                Registro
              </li>
            </>
          )}
        </ul>

        {/* Sección de categorías */}
        <h2 className="text-xl font-bold border-b pb-4 mb-4 mt-8">Categorías</h2>
        <ul className="space-y-4">
          <li
            className="hover:text-[#A27B5C] transition duration-300 cursor-pointer"
            onClick={() => {
              setIsOpen(false); // Cierra el menú
              window.location.href = "/"; // Redirige a la página de inicio
            }}
          >
            Inicio
          </li>
          <li
            className="hover:text-[#A27B5C] transition duration-300 cursor-pointer"
            onClick={() => {
              setIsOpen(false); // Cierra el menú
              window.location.href = "/nosotros"; // Redirige a la página de "Nosotros"
            }}
          >
            Nosotros
          </li>
          <li
            className="hover:text-[#A27B5C] transition duration-300 cursor-pointer"
            onClick={() => {
              setIsOpen(false); // Cierra el menú
              window.location.href = "/servicios"; // Redirige a la página de servicios
            }}
          >
            Servicios
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default InteractiveMenu;
