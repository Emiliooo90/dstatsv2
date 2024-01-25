var destGraphDiv = document.getElementById('dest_Chart');

document.addEventListener('DOMContentLoaded', function() {
    updateDestGraph('2021');
});

document.getElementById('rangoAñosDest').addEventListener('input', function(){
    var selectedDestAno = this.value;
    updateDestGraph(selectedDestAno);
});

async function updateDestGraph(ano) {
    try {
        // Realiza una solicitud al servidor para obtener el nuevo JSON del gráfico
        var url = "http://127.0.0.1:5050/api/contenido/perfil/s3_world/" + pais + "/" + ano
        var response = await fetch(url);
        var graphJSON = await response.text();

        // Limpia el contenido anterior y renderiza el nuevo gráfico
        Plotly.purge(destGraphDiv);
        Plotly.newPlot(destGraphDiv, JSON.parse(graphJSON));
    } catch (error) {
        console.error('Error:', error);
    }
}