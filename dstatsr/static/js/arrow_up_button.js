// Función para mostrar u ocultar el botón de scroll según la posición de la página
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    var arrowUpButton = document.getElementById("arrow_up");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrowUpButton.style.display = "block";
    } else {
        arrowUpButton.style.display = "none";
    }
}

// Función para hacer scroll suavemente hacia arriba
function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}