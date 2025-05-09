import { useState } from "react";
import axios from "axios";

export function useTurnoForm() {
    const [formData, setFormData] = useState({
        fecha: "",
        hora: "",
        servicio: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        const token = localStorage.getItem("accessToken"); // Obtiene el token del usuario logueado
        if (!token) {
            setErrorMessage("Usuario no autenticado.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/turnos/", // Cambia la URL según tu backend
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
                        "Content-Type": "application/json",
                    },
                }
            );
            setSuccessMessage("Turno creado exitosamente.");
            setFormData({ fecha: "", hora: "", servicio: "" }); // Limpia el formulario
        } catch (error) {
            setErrorMessage("Error al crear el turno. Inténtalo nuevamente.");
        }
    };

    return {
        formData,
        successMessage,
        errorMessage,
        handleChange,
        handleSubmit,
    };
}