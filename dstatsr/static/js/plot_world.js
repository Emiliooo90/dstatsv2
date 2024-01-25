var graphDiv = document.getElementById('world_Chart');
const tipoButtons = document.querySelectorAll('.btn-group-tipo .btn');

document.addEventListener('DOMContentLoaded', function() {
    updateGraph('importaciones');
});

tipoButtons.forEach(function(button){
    button.addEventListener('click', function(){
        const selectedTipo = this.getAttribute('data-cont');
    
        tipoButtons.forEach(function(btn) {
			btn.classList.remove('active');
		});
		this.classList.add('active');

        updateGraph(selectedTipo);
    });
});

async function updateGraph(tipo) {
        try {
            // Realiza una solicitud al servidor para obtener el nuevo JSON del gráfico
            const response = await fetch(`http://127.0.0.1:5050/api/contenido/index/world/${tipo}`);
            var graphJSON = await response.text();

            // Limpia el contenido anterior y renderiza el nuevo gráfico
            Plotly.purge(graphDiv);
            Plotly.newPlot(graphDiv, JSON.parse(graphJSON));
        } catch (error) {
            console.error('Error:', error);
        }
    }