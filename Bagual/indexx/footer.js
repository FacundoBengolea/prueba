const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-x');

// Mostrar el modal automáticamente cuando se carga la página
window.onload = function() {
    modal.style.display = "block"; // Mostrar el modal
}

// Cerrar el modal cuando se hace clic en la X
closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal si se hace clic fuera del contenido del modal
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Ocultar el modal si el clic es fuera del contenido
    }
});

// Seleccionar el footer
const footer = document.querySelector("footer");

// Función para manejar el scroll
window.addEventListener("scroll", () => {
    const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
    
    if (scrolledToBottom) {
        footer.classList.add("fixed");
    } else {
        footer.classList.remove("fixed");
    }
});
