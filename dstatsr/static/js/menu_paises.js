document.addEventListener('DOMContentLoaded', function() {
	const defaultContinentButton = document.querySelector('.btn-group-cont .btn.active');
	const paisesContainer = document.getElementById('menu-paises');
	const selectedContinent = defaultContinentButton.getAttribute('data-cont');
	const paisesSeleccionados = paisesPorContinente[selectedContinent];

	// Mostrar países correspondientes al continente seleccionado por defecto
	renderPaises(paisesSeleccionados, paisesContainer);
});

const buttons = document.querySelectorAll('.btn-group-cont .btn');
buttons.forEach(function(button) {
	button.addEventListener('click', function() {
		const selectedContinent = this.getAttribute('data-cont');
		const paisesSeleccionados = paisesPorContinente[selectedContinent];
		const paisesContainer = document.getElementById('menu-paises');

		// Limpiar el contenedor de países y generar la nueva lista
		paisesContainer.innerHTML = '';
		renderPaises(paisesSeleccionados, paisesContainer);

		// Cambiar el estilo del botón seleccionado
		buttons.forEach(function(btn) {
			btn.classList.remove('active');
		});
		this.classList.add('active');
	});
});

function renderPaises(paises, container) {
    const defaultContinentButton = document.querySelector('.btn-group-cont .btn.active');
    const selectedContinent = defaultContinentButton.getAttribute('data-cont');
	//container.innerHTML = `<h2>Países en el continente de ${selectedContinent}</h2>`;
	const divContainer = document.createElement('div');

    divContainer.className = 'justify-content-center row'

	paises.forEach(function(pais) {
		const divPais = document.createElement('div');
		const link = document.createElement('a');
		link.href = `/dstats/perfil/${pais.iso_code}`; // URL del país basado en su código ISO alpha
		link.textContent = pais.pais_name;
		divPais.appendChild(link);
		divContainer.appendChild(divPais);
        divPais.className = 'mb-3 col-md-2 col-sm-3 col-6 text-center'
        link.className = 'menu-pais-link'
	});

	container.appendChild(divContainer);
}