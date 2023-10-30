// Selecciona todos los elementos de navegación
let navItems = document.querySelectorAll('.nav-item');

// Itera sobre cada elemento
navItems.forEach((item) => {
    // Agrega un event listener para el evento 'click'
    item.addEventListener('click', (event) => {
        // Elimina la clase 'active' de todos los elementos
        navItems.forEach((item) => {
            item.classList.remove('active');
        });
        // Agrega la clase 'active' al elemento clickeado
        event.currentTarget.classList.add('active');
    });
});
