document.addEventListener("DOMContentLoaded", async () => {
    // API de JSONPlaceholder, limitando a 10 resultados
    const url = "https://jsonplaceholder.typicode.com/photos?_limit=10";
    
    try {
      // 1. Hacer la petición
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // 2. Convertir la respuesta a JSON
      const photos = await response.json();
      
      // 3. Seleccionar el contenedor de la galería
      const gallery = document.getElementById("gallery");
      
      // 4. Iterar sobre los datos y crear elementos en el DOM
      photos.forEach(photo => {
        // Creamos un contenedor para cada foto
        const card = document.createElement("div");
        card.classList.add("photo-card");

        // En lugar de usar la URL original (via.placeholder.com),
        // construimos una URL desde picsum.photos para evitar errores DNS
        const img = document.createElement("img");
        img.src = `https://picsum.photos/seed/${photo.id}/150/150`;
        img.alt = photo.title;

        const title = document.createElement("p");
        title.textContent = photo.title;

        // Insertamos la imagen y el título en la tarjeta
        card.appendChild(img);
        card.appendChild(title);

        // Añadimos la tarjeta a la galería
        gallery.appendChild(card);
      });
    } catch (error) {
      console.error("Error al obtener las fotos:", error);
    }
  });