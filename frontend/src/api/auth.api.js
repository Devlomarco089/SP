import axios from 'axios';

const API_URL = 'http://localhost:8000/api/token/';


/**
 * Realiza una solicitud POST al endpoint de login para obtener los tokens JWT.
 * @param {Object} credentials - Credenciales del usuario (username y password).
 * @returns {Object} - Respuesta con los tokens de acceso y refresco.
 * @throws {Error} - Error si las credenciales son inválidas o la solicitud falla.
 */



export async function login(credentials) {
    try {
        const response = await axios.post(API_URL, credentials, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const { access, refresh } = response.data;
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);

        return response.data;
    } catch (error) {
        
        if (error.response) {
            throw new Error(error.response.data.detail || "Error al iniciar sesión");
        } else {
            throw new Error("No se pudo conectar con el servidor");
        }
    }
}

export function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}