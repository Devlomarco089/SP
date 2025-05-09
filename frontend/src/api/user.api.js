import axios from 'axios';

export async function registerUser(formData) {
    try {
        const response = await axios.post('http://localhost:8000/api/register/', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);


        return { success: true, message: 'Usuario registrado exitosamente' };
    } catch (error) {
    
        if (error.response) {
            return { success: false, message: JSON.stringify(error.response.data) };
        } else if (error.request) {
            return { success: false, message: 'No se recibió respuesta del servidor' };
        } else {
            return { success: false, message: error.message || 'Error desconocido' };
        }
    }
}