import { useState } from "react";
import { registerUser } from "../api/user.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Navbar } from "./NavBar";

export function RegisterForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.acceptTerms) {
            toast.error("Debes aceptar los términos y condiciones.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error("Las contraseñas no coinciden.");
            return;
        }

        const result = await registerUser({
            email: formData.email,
            password: formData.password,
        });

        if (result.success) {
            toast.success("¡Registro exitoso! Redirigiendo a la página de inicio de sesión...");
            setFormData({ email: "", password: "", confirmPassword: "", acceptTerms: false });
            setTimeout(() => navigate("/login"), 3000);
        } else {
            toast.error("Error: " + result.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="register-form-container bg-[#2C3639] min-h-screen flex items-center justify-center pt-24 pb-24">
                <div className="bg-[#3F4E4F] text-[#DCD7C9] p-8 rounded-lg shadow-xl w-full max-w-xl border border-[#4A5759]">
                    <h1 className="text-3xl font-bold mb-6 text-center text-[#A27B5C]">Registrarse</h1>
                    <form className="register-form space-y-6" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="block text-lg font-medium mb-2 text-[#DCD7C9]">
                                Correo Electrónico:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg bg-[#2C3639] text-[#DCD7C9] 
                                border border-[#4A5759] focus:outline-none focus:ring-2 
                                focus:ring-[#A27B5C] focus:border-transparent 
                                placeholder-[#4A5759]"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="block text-lg font-medium mb-2 text-[#DCD7C9]">
                                Contraseña:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg bg-[#2C3639] text-[#DCD7C9] 
                                border border-[#4A5759] focus:outline-none focus:ring-2 
                                focus:ring-[#A27B5C] focus:border-transparent 
                                placeholder-[#4A5759]"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="block text-lg font-medium mb-2 text-[#DCD7C9]">
                                Confirmar Contraseña:
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg bg-[#2C3639] text-[#DCD7C9] 
                                border border-[#4A5759] focus:outline-none focus:ring-2 
                                focus:ring-[#A27B5C] focus:border-transparent 
                                placeholder-[#4A5759]"
                            />
                        </div>
                        <div className="form-group flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                required
                                className="w-5 h-5 text-[#A27B5C] bg-[#2C3639] 
                                border-[#4A5759] rounded focus:ring-2 focus:ring-[#A27B5C]"
                            />
                            <label htmlFor="acceptTerms" className="text-sm text-[#DCD7C9]">
                                Acepto los <a href="/Terminos" className="text-[#A27B5C] underline hover:text-[#4A5759]">
                                términos y condiciones</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#A27B5C] text-[#DCD7C9] font-bold rounded-lg 
                            hover:bg-[#4A5759] transition-all duration-300 
                            transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}