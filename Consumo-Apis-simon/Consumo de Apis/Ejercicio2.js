const API_KEY = '0f43a7755d8d4ae75326714c15df5ce0';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Función para obtener el clima de una ciudad
async function obtenerClima(ciudad) {
    try {
        const respuesta = await fetch(`${API_URL}?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`);
        
        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();
        mostrarClima(datos);
    } catch (error) {
        mostrarError(error.message);
    }
}

// Función para mostrar el clima en la página
function mostrarClima(datos) {
    const { name, main } = datos;
    document.getElementById('resultado').innerHTML = `
        <h3>Clima en ${name}</h3>
        <p>Temperatura: ${main.temp}°C</p>
        <p>Sensación térmica: ${main.feels_like}°C</p>
    `;
}
// Evento para el botón de búsqueda
document.getElementById('buscar').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudad').value.trim();
    if (ciudad) {
        obtenerClima(ciudad);
    } else {
        mostrarError('Por favor, ingresa una ciudad');
    }
});
