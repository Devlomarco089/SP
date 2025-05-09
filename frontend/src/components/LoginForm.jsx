import { useState } from "react";
import { login } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Navbar } from "./NavBar";

export function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        try {
            const data = await login(formData);
            // Si "Recuérdame" está marcado, guardamos en localStorage, si no, en sessionStorage
            const storage = formData.rememberMe ? localStorage : sessionStorage;
            storage.setItem("accessToken", data.access);
            storage.setItem("refreshToken", data.refresh);
            window.dispatchEvent(new Event("storage"));
            toast.success("¡Inicio de sesión exitoso!");
            navigate("/Servicios");
        } catch (error) {
            toast.error("Error al iniciar sesión: " + error.message);
        }
    };

    return (
        <>
        <Navbar />
        <div className="login-form-container bg-[#2C3639] min-h-screen flex items-center justify-center">
            <div className="bg-[#3F4E4F] text-[#DCD7C9] p-8 rounded-lg shadow-xl w-full max-w-md border border-[#4A5759]">
                <h1 className="text-3xl font-bold mb-6 text-center text-[#A27B5C]">Iniciar Sesión</h1>
                <form className="login-form space-y-6" onSubmit={handleSubmit}>
                    {error && <p className="error-message text-red-400">{error}</p>}
                    {success && <p className="success-message text-green-400">¡Inicio de sesión exitoso!</p>}
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
                    <div className="form-group flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="w-5 h-5 text-[#A27B5C] bg-[#2C3639] 
                            border-[#4A5759] rounded focus:ring-2 focus:ring-[#A27B5C]"
                        />
                        <label htmlFor="rememberMe" className="text-sm text-[#DCD7C9]">
                            Recuérdame
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#A27B5C] text-[#DCD7C9] font-bold rounded-lg 
                        hover:bg-[#4A5759] transition-all duration-300 
                        transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}