import React, { useEffect, useState } from "react";
import { useTurnoForm } from "../api/turnoform.api";
import "../styles/TurnoForm.css";
import axios from "axios";

export function TurnoForm() {
    const {
        formData,
        successMessage,
        errorMessage,
        handleChange,
        handleSubmit,
    } = useTurnoForm();

    const [servicios, setServicios] = useState([]);
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        async function loadServicios() {
            try {
                const response = await axios.get("http://localhost:8000/api/servicios/");
                setServicios(response.data);
            } catch (error) {
                console.error("Error al cargar los servicios:", error);
            }
        }
        loadServicios();
    }, []);

    const loadHorarios = async () => {
        if (formData.servicio && formData.fecha) {
            const token = localStorage.getItem("accessToken"); // Obtiene el token del usuario logueado
            if (!token) {
                console.error("Usuario no autenticado.");
                return;
            }

            try {
                const response = await axios.get(
                    "http://localhost:8000/api/horarios-disponibles/",
                    {
                        params: {
                            servicio: formData.servicio,
                            fecha: formData.fecha,
                        },
                        headers: {
                            Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
                        },
                    }
                );
                setHorarios(response.data);
            } catch (error) {
                console.error("Error al cargar los horarios disponibles:", error);
            }
        }
    };

    useEffect(() => {
        loadHorarios();
    }, [formData.servicio, formData.fecha]);

    return (
        <div className="create-turno-form">
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha:</label>
                    <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="servicio">Servicio:</label>
                    <select
                        id="servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona un servicio</option>
                        {servicios.map((servicio) => (
                            <option key={servicio.id} value={servicio.id}>
                                {servicio.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="horario">Horario:</label>
                    <select
                        id="horario"
                        name="horario"
                        value={formData.horario}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona un horario</option>
                        {horarios.map((horario) => (
                            <option key={horario.id} value={horario.id}>
                                {horario.hora}
                            </option>
                        ))}
                    </select>
                </div>
            
                <button type="submit">Crear Turno</button>
            </form>
        </div>
    );
}