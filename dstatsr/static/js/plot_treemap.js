var treeGraphDiv = document.getElementById('imex_Chart');
const tipoButtons = document.querySelectorAll('.btn-group-tipo .btn');

document.addEventListener('DOMContentLoaded', function() {
    updateTreeGraph('importaciones');
});

tipoButtons.forEach(function(button){
    button.addEventListener('click', function(){
        const selectedTipo = this.getAttribute('data-cont');
    
        tipoButtons.forEach(function(btn) {
			btn.classList.remove('active');
		});
		this.classList.add('active');

        updateTreeGraph(selectedTipo);
    });
});

async function updateTreeGraph(tipo) {
        try {
            // Realiza una solicitud al servidor para obtener el nuevo JSON del gráfico
            var url = "http://127.0.0.1:5050/api/contenido/perfil/s1_treemap/" + pais + "/" + tipo
            const response = await fetch(url);
            var graphJSON = await response.text();

            // Limpia el contenido anterior y renderiza el nuevo gráfico
            Plotly.purge(treeGraphDiv);
            Plotly.newPlot(treeGraphDiv, JSON.parse(graphJSON));
        } catch (error) {
            console.error('Error:', error);
        }
    }